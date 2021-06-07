from pyHM import mouse
import pyautogui
import time
import random

currentMouseX, currentMouseY = pyautogui.position()
print(currentMouseX, currentMouseY)

village_count = 19

sell = ["apples", "wood", "venison", "stone",
        "cheese", "meat", "iron", "pitch", "vegetables"]
# First array in each is the highest price, second is the lowest price.
sell_coordinates = {"firstRow": [[1040, 505], [1075, 505]], "secondRow": [[1040, 545], [1075, 545]], "thirdRow": [[1040, 585], [1075, 585]], "fourthRow": [[1040, 625], [
    1075, 625]], "fifthRow": [[1040, 665], [1075, 665]], "sixthRow": [[1040, 705], [1075, 705]], "seventhRow": [[1040, 745], [1075, 745]], "eighthRow": [[1040, 785], [1075, 785]]}


def getRandom():
    return random.random() * 2


def move_and_click(x, y):
    mouse.move(x, y, multiplier=(getRandom() * 20))
    time.sleep(getRandom())
    pyautogui.click(x, y)
    time.sleep(getRandom())


def next_village(sold_count):
    move_and_click(1485, 60)
    sold_count += 1
    auto_trade("false", sold_count)


def to_trade_screen():
    move_and_click(1530, 92)
    move_and_click(1684, 122)


def sell_button():
    move_and_click(1361, 688)


def sell_item(item):
    if item == "apples" or item == "wood" or item == "venison":
        move_and_click(sell_coordinates["firstRow"]
                       [1][0], sell_coordinates["firstRow"][1][1])
        move_and_click(sell_coordinates["firstRow"]
                       [0][0], sell_coordinates["firstRow"][0][1])
    elif item == "stone" or item == "cheese" or item == "furniture":
        move_and_click(sell_coordinates["secondRow"]
                       [1][0], sell_coordinates["secondRow"][1][1])
        move_and_click(sell_coordinates["secondRow"]
                       [0][0], sell_coordinates["secondRow"][0][1])
    elif item == "iron" or item == "meat" or item == "metalware":
        move_and_click(sell_coordinates["thirdRow"]
                       [1][0], sell_coordinates["thirdRow"][1][1])
        move_and_click(sell_coordinates["thirdRow"]
                       [0][0], sell_coordinates["thirdRow"][0][1])
    elif item == "pitch" or item == "bread" or item == "clothes":
        move_and_click(sell_coordinates["fourthRow"]
                       [1][0], sell_coordinates["fourthRow"][1][1])
        move_and_click(sell_coordinates["fourthRow"]
                       [0][0], sell_coordinates["fourthRow"][0][1])
    elif item == "vegetables" or item == "wine":
        move_and_click(sell_coordinates["fifthRow"]
                       [1][0], sell_coordinates["fifthRow"][1][1])
        move_and_click(sell_coordinates["fifthRow"]
                       [0][0], sell_coordinates["fifthRow"][0][1])
    elif item == "fish" or item == "salt":
        move_and_click(sell_coordinates["sixthRow"]
                       [1][0], sell_coordinates["sixthRow"][1][1])
        move_and_click(sell_coordinates["sixthRow"]
                       [0][0], sell_coordinates["sixthRow"][0][1])
    elif item == "ale" or item == "spice":
        move_and_click(sell_coordinates["seventhRow"]
                       [1][0], sell_coordinates["seventhRow"][1][1])
        move_and_click(sell_coordinates["seventhRow"]
                       [0][0], sell_coordinates["seventhRow"][0][1])
    else:
        move_and_click(sell_coordinates["eigthRow"]
                       [1][0], sell_coordinates["eigthRow"][1][1])
        move_and_click(sell_coordinates["eigthRow"]
                       [0][0], sell_coordinates["eigthRow"][0][1])
    sell_button()


def auto_trade(start, sold_count):
    print("Sold Count: " + str(sold_count))
    if start == "true":
        to_trade_screen()
    to_sell = sell[random.randrange(len(sell))]
    if sold_count == village_count:
        time.sleep(240)
        sold_count = 0
    if to_sell == "wood" or to_sell == "stone" or to_sell == "iron" or to_sell == "pitch":
        move_and_click(527, 392)
    elif to_sell == "apples" or to_sell == "cheese" or to_sell == "meat" or to_sell == "vegetables" or to_sell == "fish" or to_sell == "ale":
        move_and_click(601, 398)
    else:
        move_and_click(765, 398)
    sell_item(to_sell)
    next_village(sold_count)


auto_trade("true", 0)
