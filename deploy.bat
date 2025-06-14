@echo off
echo ================================================
echo       SCRIPT DE DEPLOY - PORTFOLIO
echo ================================================
echo.

echo [1/3] Fazendo build do projeto...
call npm run build

echo.
echo [2/3] Build concluido! Arquivos prontos em: build/
echo.

echo ================================================
echo       ARQUIVOS PARA UPLOAD VIA FTP:
echo ================================================
echo.

dir build /s

echo.
echo ================================================
echo       PROXIMOS PASSOS:
echo ================================================
echo 1. Abra o FileZilla
echo 2. Conecte ao seu servidor FTP
echo 3. Navegue ate a pasta publica (public_html, www, etc.)
echo 4. Envie TODOS os arquivos da pasta 'build\'
echo.
echo ⚠️  IMPORTANTE: Envie apenas o CONTEUDO da pasta build,
echo    nao a pasta build em si!
echo.
echo 📋 Consulte o arquivo GUIA_FTP.md para instrucoes detalhadas
echo.

pause 