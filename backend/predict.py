import tensorflow as tf
# import keras
import numpy as np
import cv2
import matplotlib.pyplot as plt
# import segmentation_models as sm
# from segmentation_models import Unet

# import pandas as pd
# import os
# from PIL import Image
# from numpy import asarray

print("hello")

# imgPath = './image.png'

# lungImg = []
# img_size = 448


# imgLung = cv2.imread(imgPath)
# imgLung = cv2.cvtColor(imgLung, cv2.COLOR_BGR2GRAY)

# imgLung = cv2.resize(imgLung, dsize = (img_size, img_size),interpolation = cv2.INTER_AREA).astype('float32')
# lungImg.append(imgLung[..., np.newaxis])

# lungImg = np.array(lungImg)
# lungImg[0][0][0]

# BACKBONE = 'mobilenet'
# preprocess_input = sm.get_preprocessing(BACKBONE)
# lung_test = preprocess_input(lungImg)

# # Set model
# model = Unet( BACKBONE,input_shape=(img_size,img_size,1), encoder_weights=None)
# initial_epoch_of_training=0
# TRAIN_CLASSIFY_LEARNING_RATE =1e-2
# optim=tf.keras.optimizers.Adam(lr=TRAIN_CLASSIFY_LEARNING_RATE,epsilon=1e-5)
# model.compile("Adam", loss=sm.losses.bce_jaccard_loss,metrics=[sm.metrics.iou_score],)


# model.load_weights("./convlstm_model_weights.best.hdf5")
# model.evaluate(lung_test)


# predicted = model.predict(lung_test)

# fig = plt.figure(figsize = (18,15))

# plt.subplot(1,3,3)
# plt.imshow(lung_test[0], cmap = 'gray')
# plt.imshow(predicted[0],alpha = 0.5,cmap = "hot")
# plt.title('predicted infection mask')

# plt.savefig('new_plot.png')