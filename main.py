import numpy as np
import matplotlib.pyplot as plt
from AI import TextureGenerator
from DataParser import generated_data
from ImgSizeConfig import *


def main():
    train_data_x, train_data_y = generated_data(csv_path="result_China.csv")
    generator = TextureGenerator(train_data_x, train_data_y)

    generator.train_model(epochs=10, batch_size=6)

    ambient_occlusion = np.random.rand(ao_x * ao_y)
    normal_map = np.random.rand(nm_x * nm_y * nm_c)
    input = np.concatenate((ambient_occlusion, normal_map), axis=0).reshape(
        1,
        1,
        ao_x,
        int((nm_x / ao_x) ** 2 * nm_c) * ao_x + ao_x,
        1, 1)

    bc, r, m = generator.generate_textures(input)

    ambient_occlusion = ambient_occlusion.reshape(ao_x, ao_y, ao_c)
    normal_map = normal_map.reshape(nm_x, nm_y, nm_c)

    save_img(ambient_occlusion, 'ambient_occlusion', 'gray')
    save_img(normal_map, 'normal_map')
    save_img(bc, 'bc')
    save_img(r, 'r', 'gray')
    save_img(m, 'm', 'gray')


if __name__ == '__main__':
    main()


def save_img(img, name: str, cmap=None):
    plt.imshow(img, cmap=cmap)
    plt.axis('off')
    plt.savefig(name + '.png', bbox_inches='tight', pad_inches=0)
    plt.close()
