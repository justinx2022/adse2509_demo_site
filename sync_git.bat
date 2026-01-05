@echo off
echo Syncing to GitHub...
git add .
git commit -m "Auto-sync: %date% %time%"
git push
echo Done!
pause
