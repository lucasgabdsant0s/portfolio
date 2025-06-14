# 📁 Guia Completo - Upload FTP com FileZilla

## 🎯 Arquivos para Upload
Os arquivos do seu portfólio estão prontos na pasta `build/`. Estes são os arquivos **otimizados** que devem ser enviados para o servidor:

```
build/
├── index.html          (arquivo principal)
├── asset-manifest.json (manifesto dos recursos)
└── static/
    ├── css/            (estilos otimizados)
    └── js/             (JavaScript otimizado)
```

## ⚙️ Configuração no FileZilla

### 1. Abrir o FileZilla
- Abra o FileZilla Client no seu computador
- Se não tiver instalado, baixe em: https://filezilla-project.org/

### 2. Configurar Conexão FTP
Você precisará dessas informações do seu provedor de hospedagem:

**Dados necessários:**
- 🌐 **Host/Servidor:** ftp.seudominio.com (ou IP do servidor)
- 👤 **Usuário:** seu_usuario_ftp
- 🔐 **Senha:** sua_senha_ftp
- 🚪 **Porta:** 21 (FTP) ou 22 (SFTP)

### 3. Conectar ao Servidor
1. No FileZilla, vá em: **Arquivo > Gerenciador de Sites**
2. Clique em **"Novo Site"**
3. Preencha as informações:
   - **Host:** Endereço do seu servidor
   - **Protocolo:** FTP ou SFTP
   - **Tipo de Logon:** Normal
   - **Usuário:** Seu usuário FTP
   - **Senha:** Sua senha FTP

### 4. Fazer Upload dos Arquivos

#### 📍 Pasta de Destino
- as Normalmente é: `public_html/`, `www/`, `htdocs/` ou similar
- Verifique com seu provedor qual é a pasta correta

#### 🚀 Processo de Upload
1. No painel **esquerdo** (Local): Navegue até a pasta `build/` do seu projeto
2. No painel **direito** (Remoto): Navegue até a pasta pública do servidor
3. **Selecione TODOS** os arquivos e pastas dentro de `build/`
4. **Arraste** ou clique com botão direito > **Upload**

## ✅ Checklist de Upload

- [ ] Build do projeto executado (`npm run build`)
- [ ] Conexão FTP configurada no FileZilla
- [ ] Pasta de destino identificada no servidor
- [ ] Arquivo `index.html` na raiz da pasta pública
- [ ] Pasta `static/` com CSS e JS enviados
- [ ] Site testado no navegador

## 🔧 Comandos Úteis

Para refazer o build quando necessário:
```bash
npm run build
```

## 🌐 Estrutura Final no Servidor
Após o upload, seu servidor deve ter esta estrutura na pasta pública:

```
public_html/ (ou www/, htdocs/)
├── index.html
├── asset-manifest.json  
└── static/
    ├── css/
    │   └── main.[hash].css
    └── js/
        └── main.[hash].js
```

## ⚠️ Dicas Importantes

1. **SEMPRE** faça upload dos arquivos da pasta `build/`, não da raiz do projeto
2. **NÃO** envie: `node_modules/`, `src/`, `package.json`, etc.
3. **Teste** o site após o upload acessando seu domínio
4. Se algo não funcionar, verifique se todos os arquivos foram enviados
5. **Backup**: Sempre faça backup dos arquivos antigos antes de substituir

## 🆘 Problemas Comuns

**Site não carrega:**
- Verifique se o `index.html` está na pasta raiz correta
- Confirme se a pasta `static/` foi enviada completamente

**CSS/JS não funciona:**
- Verifique se a pasta `static/` tem as subpastas `css/` e `js/`
- Confirme as permissões dos arquivos no servidor

**Erro 404:**
- Verifique se você está acessando o domínio correto
- Confirme se os arquivos estão na pasta pública correta 