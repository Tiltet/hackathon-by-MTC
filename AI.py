import numpy as np
from tensorflow.keras.models import Model, load_model
from tensorflow.keras.layers import Input, Dense, Conv2D, Flatten
from tensorflow import saved_model
import matplotlib.pyplot as plt
import pandas as pd
import os
from ImgSizeConfig import *


class TextureGenerator():
    def __init__(self, train_data_x, train_data_y):
        self.model = self.build_model()
        self.train_data_x = train_data_x
        self.train_data_y = train_data_y

    def build_model(self):
        input_layer = Input(shape=(
                1,
                ao_x,
                int((nm_x / ao_x) ** 2 * nm_c) * ao_x + ao_x,
                1))

        x = Conv2D(2, (3, 3), activation='relu')(input_layer)
        x = Flatten()(x)
        x = Dense(8, activation='relu')(x)

        output_layer = Dense(bc_x * bc_y * bc_c + r_x * r_y * r_c + m_x * m_y * m_c, activation='sigmoid')(x)

        model = Model(inputs=input_layer, outputs=output_layer)
        model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
        return model

    def generate_textures(self, input_array):
        output_array = self.model.predict(input_array)
        output_array = output_array.reshape(bc_x, bc_y, bc_c+r_c+m_c)

        texture_rgb = output_array[:, :, :3]
        texture_alpha = output_array[:, :, 3]
        texture_depth = output_array[:, :, 4]

        return texture_rgb.resape(2048, 2048, 3), texture_alpha.resape(2048, 2048), texture_depth.resape(2048, 2048)

    def train_model(self, epochs=10, batch_size=32):
        self.model.fit(self.train_data_x, self.train_data_y, epochs=epochs, batch_size=batch_size)

    def save_model(self):
        self.model.save('model.h5')

    def load_model_s(self, path):
        self.model = load_model('model.h5')
