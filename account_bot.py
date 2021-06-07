import pyautogui
import time

currentMouseX, currentMouseY = pyautogui.position();
print(currentMouseX, currentMouseY);

def load_game():
    pyautogui.doubleClick(311, 189) # load game from main menu, location might change depending on how many apps are installed
    time.sleep(10) # wait for game to load
    pyautogui.click(1172, 596) # I am a new player!
    time.sleep(1)
    pyautogui.click(1048, 771) # Terms of service
    time.sleep(10) # tries to load global realms.
    pyautogui.click(909, 637) # swap worlds
    time.sleep(5) # wait for load
    # pyautogui.click(x, y) # depends what world needs loading
    time.sleep(10) # wait for load
    pyautogui.click(1266, 629) # manual
    time.sleep(1)
    # pyautogui.click(x, y) # county placement depends where to spawn
    pyautogui.click(1008, 614) # place village
    pyautogui.move(515, 12) # now we just exit 
    time.sleep(1)
    pyautogui.click(515, 12)    
    clear_cache() # wipe cache and repeat

def clear_cache():
    pyautogui.click(542, 196) # system apps button
    time.sleep(1)
    pyautogui.click(880, 454) # android settings button
    time.sleep(1)
    pyautogui.click(402, 330) # storage button
    time.sleep(1)
    pyautogui.click(307, 477) # apps
    time.sleep(1)
    pyautogui.click(330, 333) # shk
    time.sleep(1) 
    pyautogui.click(433, 524)
    time.sleep(1)
    pyautogui.click(1407, 646) # press ok
    pyautogui.move(515, 13) 
    pyautogui.click(515, 13) # back to main menu
    load_game()

clear_cache()
