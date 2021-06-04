import pyautogui
import time

screenWidth, screenHeight = pyautogui.size();
currentMouseX, currentMouseY = pyautogui.position();
print(currentMouseX, currentMouseY);

loaded = 'false';




def load_game():
    pyautogui.click(888, 623); # Swap world
    time.sleep(5);
    pyautogui.click(693, 980); # Selects first non mobile map.
    time.sleep(10);
    pyautogui.click(1262, 623); # Manual village placement
    time.sleep(2);
    # pyautogui.click(x, y) # Whatever the coordinates of the county are.

    # We don't need to do the tutorial I think. We can just exit the game and clear the cache then repeat.
    pyautogui.move(515, 12)
    time.sleep(1)
    pyautogui.click(515, 12)    


# TODO
def clear_cache():
    print('cache cleared');

load_game();
