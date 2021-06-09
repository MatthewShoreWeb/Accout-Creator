from pyHM import mouse
from PIL import Image
import pyautogui
import time
import random


currentMouseX, currentMouseY = pyautogui.position()
print(currentMouseX, currentMouseY)

village_count = 19
repair_count = 0

def getRandom():
    return random.random() * 2

def repair_castle():
    pyautogui.click(1532, 92)
    time.sleep(getRandom())
    pyautogui.click(1588, 123)
    time.sleep(getRandom())
    pyautogui.click(1790, 226)
    time.sleep(getRandom() * 2) # wait for load
    pyautogui.click(1825, 421)
    time.sleep(getRandom())
    pyautogui.click(431, 415)

def next_village(repair_count):
    pyautogui.click(1485, 60)
    repair_count += 1

# repair_castle()
