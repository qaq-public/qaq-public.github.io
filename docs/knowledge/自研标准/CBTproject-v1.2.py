import copy
import functools
import os
import xlsxwriter
import re
import pandas as pd
from pandas.api.types import CategoricalDtype

# 工具类
class Common:
    def __init__(self):
        self.mdAllData = {}  # 全部的数据  分为files、mds
        self.maxFileNum = 0  # 文件夹最大深度
        self.title_format = {
            'font_name': '微软雅黑',  # 字体
            'font_size': 12,  # 字体大小
            'font_color': 'black',  # 字体颜色
            'bold': True,  # 是否粗体
            'fg_color': '#cccccc',  # 前景颜色
            'align': 'center',  # 水平居中对齐
            'valign': 'vcenter',  # 垂直居中对齐
            'border': 1,  # 边框宽度
            'top': 1,  # 上边框
            'left': 1,  # 左边框
            'right': 1,  # 右边框
            'bottom': 1  # 底边框
        }
        self.format = {
            "font_name": "宋体",
            "font_size": 11,
            "font_color": "black",
            "bold": False,
            "align": "left",
            "valign": "vcenter",
            "num_format": "yyyy-mm-dd H:M:S",
            "border": 1,
            "top": 1,
            "left": 1,
            "right": 1,
            "bottom": 1
        }
        # self.path_root = 'D:/project/docProject/docs/docs/services/standard'
        # self.path_result = './result/'
        self.path_root = '.'
        self.path_result = './'

    def get_file_header(self):
        file_header = []
        nums = '零一二三四五六七八九'
        file_header.append('上线要求')
        file_header.append('类别')
        for i in range(2, self.maxFileNum):
            file_header.append(nums[i-1]+'级分类')
        return file_header

    # 处理URL
    def op_url(self, line):
        op_line = line
        if re.search(r'.*\[.*\]\(.+\).*', line):
            A1 = line.split('[')
            B1 = A1[1].split("](")
            C1 = B1[1].split(')')
            A = A1[0]
            B = B1[0]
            C = C1[0]
            D = C1[1]
            op_line = '=(HYPERLINK("' + C + '","' + A + B + D + C + '"))'
        return op_line

    # 处理网页代码
    def op_html(self, line):
        op_line = line
        if re.search(r'<.+>', line) and re.search(r'</.+>', line):
            op_line = re.sub(r'</.+>', ' ', line)
            op_line = re.sub(r'<.+>', ' ', op_line)
        return op_line

    # 排序
    def tcmp(self, a, b):
        sort_tcmp = ('edition', 'package', 'specialty', 'ambitus', 'online', 'qa', ' ', 'nan')
        if sort_tcmp.index(a[1]) > sort_tcmp.index(b[1]):
            return 1
        elif sort_tcmp.index(a[1]) < sort_tcmp.index(b[1]):
            return -1
        else:
            return 0


# 文件处理类
class Readmd(Common):
    def __init__(self):
        Common.__init__(self)
        self.root_file = self.path_root
        self.temporary_num = 0
        self.md_file_data_test = []

    '''将文件目录以及md文件存为字典格式'''
    def get_all_file(self, files, filepath):
        md_data = {}
        if self.temporary_num > self.maxFileNum:
            self.maxFileNum = self.temporary_num
        for file in files:
            if '.' not in file:
                self.temporary_num += 1
                md_data[file] = self.get_all_file(os.listdir(os.path.join(filepath, file)),
                                                  os.path.join(filepath, file))
                self.temporary_num -= 1
            elif '.md' in file:
                # 获取文件存放路径
                md_data[file] = str(os.path.join(filepath, file))
                continue
        return md_data

    '''获取文件存放路径'''
    def get_root_file(self):
        files = os.listdir(self.root_file)
        self.mdAllData = self.get_all_file(files, self.root_file)
        return

    '''获取md文件的具体内容，并返回list,该函数只处理单个md文件'''
    '''md_path:文件路径，md_name:文件名'''
    def read_md_datas(self, md_path, md_name):
        with open(md_path, 'r', encoding='utf-8') as file:
            set_md_data = self.set_md_datas(file)
            md_file_datas_list = self.list_md_datas(set_md_data)
            file.close()
        return md_file_datas_list

    # 将文件处理成字典并返回
    def set_md_datas(self, file):
        set_md = {}
        sign_one = 0
        sign_two = 0
        sign_three = 0
        sign_remarks = 0
        one_title = "one_title"
        two_title = "two_title"
        num_title = "num_title"
        remarks_1 = ''
        for line in file:
            line = line.strip()
            if '# ' in line and line[0:2] == '# ':
                sign_one = 1
                sign_two = 0
                sign_three = 0
                sign_remarks = 0
                one_title = line
                set_md[one_title] = {}
            elif sign_one == 1:
                if '## ' in line and line[0:3] == '## ':
                    sign_two = 2
                    sign_three = 0
                    sign_remarks = 0
                    two_title = line
                    set_md[one_title][two_title] = {}
                elif sign_two == 2:
                    if re.match(r"^([\d]+\.\s)", line):
                        sign_three = 3
                        sign_remarks = 0
                        num_title = line if '| ' not in line else line.split('| ')[0]
                        priority = 'P1' if len(line.split('| ')) < 2 else line.split('| ')[1]
                        surplus_time = 'day: 0' if len(line.split('| ')) < 3 else line.split('| ')[2]
                        set_md[one_title][two_title][num_title] = ['', priority, surplus_time, '', '']
                    elif sign_three == 3:
                        line = self.op_html(line)
                        if ('* ' in line and line[0:2] == '* ') or ('- ' in line and line[0:2] == '- '):
                            set_md[one_title][two_title][num_title][0] = set_md[one_title][two_title][num_title][0] + \
                                                                         line + '\n'
                        elif "|-" in line:
                            pass
                        elif line != '':
                            remarks_2 = self.op_url(line)
                            if sign_remarks == 0:
                                set_md[one_title][two_title][num_title][3] = remarks_2
                            elif sign_remarks == 1:
                                set_md[one_title][two_title][num_title][3] = remarks_1 + '\n' + line + '\n'
                            else:
                                set_md[one_title][two_title][num_title][3] = set_md[one_title][two_title][num_title][3]\
                                                                             + line + '\n'
                            remarks_1 = line
                            sign_remarks = sign_remarks + 1
        return set_md

    # 将字典处理成list并返回
    def list_md_datas(self, set_md_datas):
        list_all_md_datas = []
        list_md_data_one = []
        if set_md_datas != {}:
            for one_key in set_md_datas.keys():
                list_md_data_one = list_md_data_one + [str(one_key)]
                if set_md_datas[one_key] != {}:
                    for two_key in set_md_datas[one_key].keys():
                        list_md_data_two = list_md_data_one + [str(two_key)]
                        if set_md_datas[one_key][two_key] != {}:
                            for three_key in set_md_datas[one_key][two_key].keys():
                                list_md_data_three = list_md_data_two + [str(three_key)+'\n'] + \
                                                   set_md_datas[one_key][two_key][three_key]
                                list_all_md_datas.append(list_md_data_three)
                        else:
                            list_all_md_datas.append(list_md_data_two)
                else:
                    list_all_md_datas.append(list_md_data_one)

        return list_all_md_datas

    def get_file_list(self, files):
        md_files_datas_list = []
        for file_name in files.keys():
            if '.' not in file_name:
                # 处理每一个文件夹
                md_files_datas_list = md_files_datas_list + self.get_file_list(files[file_name])
            elif '.md' in file_name:
                # 处理每一个md文档
                file_path_list = []
                file_path_num = len(files[file_name].split('\\'))-2  # 当前文件所在深度
                # print("当前文件:({})所在深度：{}".format(file_name, file_path_num))
                for i in range(1, self.maxFileNum+1):
                    if i > file_path_num:
                        file_path_list.append(' ')
                    else:
                        file_path_list.append(files[file_name].split('\\')[i])
                md_data_list = self.read_md_datas(files[file_name], file_name)
                md_data_list_len = len(md_data_list)
                for i in range(0, md_data_list_len):
                    md_files_datas_list.append(file_path_list + [file_name.split('.')[0]] + md_data_list[i])
        return md_files_datas_list

# 表格处理类
class Generate(Readmd):
    def __init__(self):
        Readmd.__init__(self)
        self.get_root_file()  # 执行该方法，获取md文件路径
        self.header1 = self.get_file_header()
        nums = '零一二三四五六七八九'
        self.header2 = [nums[self.maxFileNum-1]+'级分类', nums[self.maxFileNum]+'级分类', '标准内容', '确认项', '内容',
                        '优先级', '剩余时间周期', '备注', '是否符合']
        self.header = self.header1 + self.header2  # 获取表头
        self.md_file_data = copy.deepcopy(self.mdAllData)  # 获取md文档存放路径
        self.header_len = len(self.header)  # 表头长度

    def creat_xlsx(self):
        workbook = xlsxwriter.Workbook(self.path_result+'CBT标准.xlsx')
        title_style = workbook.add_format(self.title_format)
        style = workbook.add_format(self.format)
        style.set_text_wrap()
        worksheet = workbook.add_worksheet(name='CBT标准')
        # 设置单元格格式
        worksheet.freeze_panes(1, 0)  # 冻结行列
        worksheet.set_column('A:C', 15)
        worksheet.set_column('D:D', 25)
        worksheet.set_column('E:F', 30)
        worksheet.set_column('G:G', 38)
        worksheet.set_column('H:H', 35)
        worksheet.set_column('I:I', 8)
        worksheet.set_column('J:J', 15)
        worksheet.set_column('K:K', 27)
        worksheet.set_column('L:L', 15)

        # 配置首行元素
        worksheet.write_row(0, 0, self.header, title_style)

        # 配置具体内容
        datas = self.get_file_list(self.md_file_data)
        # datas.sort(key=lambda x: (x[2], x[3]))    tcmp
        datas.sort(key=functools.cmp_to_key(self.tcmp))
        for i in range(1, len(datas)+1):
            worksheet.write_row(i, 0, datas[i-1], style)
        workbook.close()
        return


    # 为CBT设置格式
    def CBT_format(self):
        '''1. 重要程度不高，稍后完成'''
        df = pd.read_excel(self.path_result + 'CBT标准.xlsx')
        print("排序前测试数据：{}".format(df))
        sort_format = CategoricalDtype(
            ['edition', 'package', 'specialty', 'ambitus', 'online', 'qa'],
            ordered=True
        )
        df['类别'] = df['类别'].astype(sort_format)
        df.sort_values(by='类别')
        df.to_excel(self.path_result + 'CBT标准_sort.xlsx')
        print("排序后测试数据：{}".format(df))
        return 


    def run(self):
        self.creat_xlsx()
        # self.CBT_format()
        return

generate_ = Generate()
generate_.run()
'''启动入口'''
try:
    print("开始转化！")

    print("转化成功！")
except:
    print("出现错误！")