import pyautogui
import time

screenWidth, screenHeight = pyautogui.size();
currentMouseX, currentMouseY = pyautogui.position();
print(currentMouseX, currentMouseY);

def load_game():
    pyautogui.click(888, 623) # Swap world
    time.sleep(5)
    pyautogui.click(693, 980) # Selects first non mobile map.
    time.sleep(10)
    pyautogui.click(1262, 623) # Manual village placement
    time.sleep(2)
    # pyautogui.click(x, y) # Whatever the coordinates of the county are.

    # We don't need to do the tutorial I think. We can just exit the game and clear the cache then repeat.
    pyautogui.move(515, 12)
    time.sleep(1)
    pyautogui.click(515, 12)    

def clear_cache():
    pyautogui.click(542, 196) # system apps button
    time.sleep(1)
    pyautogui.click(880, 454) # android settings button
    time.sleep(1)
    pyautogui.click(402, 330) # storage button
    time.sleep(1)
    for x in range(8): # go down the list till we reach cache option
        pyautogui.press('down')
    pyautogui.press('enter') # press cache option
    time.sleep(1) # wait for box to appear (should be instant)
    pyautogui.click(1407, 646) # press ok
    pyautogui.move(515, 13) 
    pyautogui.click(515, 13) # back to main menu

clear_cache()
