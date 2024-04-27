import pandas as pd
import os
import matplotlib.pyplot as plt
import numpy as np
from skimage.transform import resize
from ImgSizeConfig import *

base_dir = "D:/PyCharmProject/pythonProject/data/"


def generated_data(csv_path="result.csv"):
    df = pd.read_csv(csv_path)
    train_data_x = []
    train_data_y = []
    for i, row in df.iterrows():
        tank_name = row["tankName"]
        nation = row["Nation"]
        ao = row["AO"]
        nm = row["NM"]
        bc = row["BC"]
        r = row["R"]
        m = row["M"]

        base_nation_dir = base_dir + nation + "/"

        ao_img = plt.imread(os.path.join(base_nation_dir, ao))
        nm_img = plt.imread(os.path.join(base_nation_dir, nm))
        bc_img = plt.imread(os.path.join(base_nation_dir, bc))
        r_img = plt.imread(os.path.join(base_nation_dir, r))
        m_img = plt.imread(os.path.join(base_nation_dir, m))

        print("-" * 100)
        print(tank_name, " ", nation)
        print("img ao", ao_img.shape)
        print("img nm", nm_img.shape)
        print("img bc", bc_img.shape)
        print("img r", r_img.shape)
        print("img m", m_img.shape)

        ao_img = resize(ao_img, (ao_x, ao_y, ao_c), anti_aliasing=True)
        nm_img = resize(nm_img, (nm_x, nm_y, nm_c), anti_aliasing=True)
        bc_img = resize(bc_img, (bc_x, bc_y, bc_c), anti_aliasing=True)
        r_img = resize(r_img, (r_x, r_y, r_c), anti_aliasing=True)
        m_img = resize(m_img, (m_x, m_y, m_c), anti_aliasing=True)

        print("*" * 100)
        print("img ao", ao_img.shape)
        print("img nm", nm_img.shape)
        print("img bc", bc_img.shape)
        print("img r", r_img.shape)
        print("img m", m_img.shape)

        train_data_x.append(
            np.concatenate((ao_img.reshape(ao_x * ao_y * ao_c), nm_img.reshape((nm_x * nm_y * nm_c))), axis=0).reshape(
                1,
                ao_x,
                int((nm_x / ao_x) ** 2 * nm_c) * ao_x + ao_x,
                1))
        train_data_y.append(np.concatenate(
            (bc_img.reshape((bc_x * bc_y * bc_c)), r_img.reshape((r_x * r_y * r_c)), m_img.reshape((m_x * m_y * m_c))),
            axis=0).reshape(bc_x * bc_y * bc_c + r_x * r_y * r_c + m_x * m_y * m_c))

    train_data_x = np.array(train_data_x)
    train_data_y = np.array(train_data_y)

    return train_data_x, train_data_y
