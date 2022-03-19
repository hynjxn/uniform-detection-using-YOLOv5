import os
from glob import glob


def check_file(path, len=10):
    '''파일 내용 확인하는 함수'''
    file_name = os.listdir(path)
    for i in range(len):
        print(file_name[i])


def remove_file_by_keyword(path, keyword):
    '''특정 내용이 존재할시 삭제하는 함수'''
    remove_file_name = glob(f'{path}/*{keyword}')
    for file in remove_file_name:
        os.remove(file)


def change_file_name_by_keyword(path, keyword):
    '''파일명을 수정하는 함수'''
    file_name = os.listdir(path)

    for i, file in enumerate(file_name):
        file_oldname = os.path.join(path, file)
        start_index = i+1 # 자신이 사용할 Index를 조정

        file_newname = os.path.join(path, f'{keyword}-{start_index}.jpg')
        os.rename(file_oldname, file_newname)