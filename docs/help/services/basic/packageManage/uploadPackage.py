from fileinput import filename
import requests


def upload(baseUrl, branchName, projectId, token, fileName, filePath):
    url = baseUrl+'/api/packagemanage/token/package/upload'
    payload = {'branchName': branchName,
               'projectId': projectId,
               'token': token}
    files = [
        ('file', (fileName, open(filePath, 'rb'), 'application/octet-stream'))
    ]
    headers = {}
    response = requests.request(
        "POST", url, headers=headers, data=payload, files=files)
    return response


if __name__ == '__main__':
    # 正式服域名
    baseUrl = "https://qaq.com"
    # 上传到的分支名，如果对应项目下没有这个分支，会返回找不到分支
    branchName = "223"
    # 上传到的项目代号
    projectId = "G100"
    # 在包体管理平台帮助文档中，获取对应项目下，自己的token
    token = 'ieEyoU+kJoMl7v/DTfoNJV2okbCJ67JNgs0V2jbXB8A'
    # 需要上传的包体文件路径
    filePath = "C:\\Users\\guozhuru\\Downloads\\BiliPlayer-bili.apk"
    # 需要上传的包体的文件名
    fileName = "BiliPlayer-bili.apk"
    response = upload(baseUrl, branchName, projectId,
                      token, fileName, filePath)
    print(response.text)
