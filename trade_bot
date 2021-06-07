from pyHM import mouse
import pyautogui
import time
import random

currentMouseX, currentMouseY = pyautogui.position()
print(currentMouseX, currentMouseY)

sell = ["apples", "wood", "venison"]
# First array in each is the highest price, second is the lowest price.
sell_coordinates = {"firstRow": [[1040, 505], [1075, 504]], "secondRow": [[], []], "thirdRow": [[], []], "fourthRow": [[], []], "fifthRow": [[], []], "sixthRow": [[], []], "seventhRow": [[], []]}

def getRandom():
    # Random float between 0 and 1.
    return random.random()

def move_and_click(x, y):
    mouse.move(x, y, multiplier = (getRandom() * 10))
    time.sleep(getRandom())
    pyautogui.click(x, y)
    time.sleep(getRandom())

def next_village(): 
    move_and_click(1485, 60)
    auto_trade("false")

def to_trade_screen():
    move_and_click(1530, 92)
    move_and_click(1684, 122)

def sell_button():
    move_and_click(1361, 688)

def sell_item(item):
    if item == "apples" or item == "wood" or item == "venison":
            move_and_click(sell_coordinates["firstRow"][1][0], sell_coordinates["firstRow"][1][1])
            move_and_click(sell_coordinates["firstRow"][0][0], sell_coordinates["firstRow"][0][1])  
    sell_button()

def auto_trade(start):
    if start == "true":
        to_trade_screen()
    to_sell = sell[random.randrange(len(sell))]
    if to_sell == "wood" or to_sell == "stone" or to_sell == "iron" or to_sell == "pitch":
        move_and_click(527, 392)
    elif to_sell == "apples" or to_sell == "cheese" or to_sell == "meat" or to_sell == "vegetables" or to_sell == "fish" or to_sell == "ale":
        move_and_click(601, 398)
    else:
        move_and_click(765, 398)
    sell_item(to_sell)
    next_village()
    

auto_trade("true")
