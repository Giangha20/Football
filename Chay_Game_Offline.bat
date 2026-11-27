@echo off
chcp 65001 >nul
title EFOOT Mobile Arena - Game Offline
cd /d "%~dp0"

if not exist "index.html" (
    echo ===================================================================
    echo [THONG BAO QUAN TRONG]
    echo Vui long GIAI NEN (Extract All) toan bo thu muc truoc khi mo game!
    echo Khong duoc chay truc tiep tu trong tep nen Football_Windows_Offline.zip.
    echo ===================================================================
    pause
    exit /b
)

start "" "%~dp0Football_Game_Offline.exe"
exit
