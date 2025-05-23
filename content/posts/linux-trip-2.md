+++
title = "第二回，初入KDE虚界间，安装APPS耀目光"
date = 2024-02-07
+++

# 第二回，初入KDE虚界间，安装APPS耀目光
2024-02-07
# 1.基本

```bash
systemctl stop reflector.service
systemctl disable reflector.service
eos-update # EndeavourOS更新命令
sudo pacman -S paru # Aur 助手
paru -Syyu
paru -S pacman-contrib
paru -S discover # 应用中心
upar -S filelight # 磁盘管理器
paru -S marktext-bin # markdown编辑器
paru -S octopi # 可视化界面管理包管理器
paru -S bauh # 可视化界面管理包管理器
paru -S brave-bin # 浏览器
paru -S keepassxc # 密码管理器
paru -S bitwarden # 密码管理器
paru -S libreoffice-still libreoffice-still-zh-cn # 文档编辑器
paru -S firefox-developer-edition # 浏览器
paru -S vlc # 音视频播放器
paru -S thunderbird thunderbird-i18n-zh-cn # 邮箱
paru -S obs-studio # 录屏软件
paru -S schildichat-desktop-bin # matrix聊天软件
paru -S tabby-bin # ssh连接工具
paru -S vscodium-bin # 代码编辑器
paru -S anytype-bin # 笔记软件
paru -S joplin-beta-appimage # 笔记软件
```

# 安装fcitx5-rime输入法

```bash
paru -S fcitx5-im
paru -S fcitx5-material-color
paru -S fcitx5-rime
paru -S ruby
```

这里直接使用自动部署脚本。

```bash
git clone --depth=1 https://github.com/Mark24Code/rime-auto-deploy.git --branch latest
cd rime-auto-deploy
./installer.rb
```

![](https://img.0pt.icu/learn/linux-trip/2/1.png)

输入3回车。

![](https://img.0pt.icu/learn/linux-trip/2/2.png)

输入1回车。

然后在`/etc/environment` 文件末尾添加：

```/etc/environment
export GTK_IM_MODULE=fcitx5

export QT_IM_MODULE=fcitx5

export XMODIFIERS=@im=fcitx5
```

保存后退出，重启电脑之后，输入法就可以用了。

# 安装NVIDIA显卡驱动

```bash
paru -S nvidia-inst
nvidia-inst --drivers
```

![](https://img.0pt.icu/learn/linux-trip/2/3.png)

需要等一会，不要着急。

![](https://img.0pt.icu/learn/linux-trip/2/4.png)

这里我的`series`是`545`

```bash
nvidia-inst --series 545 -t
```

将`--series`参数后面的`545`改为你自己的`series`

例如以`390`为例，就是

```bash
 nvidia-inst --series 390 -t
```

![](https://img.0pt.icu/learn/linux-trip/2/5.png)

将其中的这个：

```bash
COMMANDS TO RUN:
    pacman -Rs --noconfirm --noprogressbar --nodeps nvidia-dkms nvidia-hook nvidia-utils
    yay -Syu nvidia-390xx-dkms nvidia-390xx-utils nvidia-390xx-settings
```

里面的COMMANDS TO RUN给出的命令执行就可以安装显卡驱动。

```bash
pacman -Rs --noconfirm --noprogressbar --nodeps nvidia-dkms nvidia-hook nvidia-utils
yay -Syu nvidia-390xx-dkms nvidia-390xx-utils nvidia-390xx-settings
```

等待安装。

安装后执行：

```bash
nvidia-smi
```

来查看显卡驱动有没有正确安装。执行后有如下输出则证明显卡驱动安装成功。

![](https://img.0pt.icu/learn/linux-trip/2/6.png)

# 配置btrfs

```bash
paru -S snapper
paru -S snap-pac
paru -S grub-btrfs
paru -S btrfs-assistant
paru -S btrfsmaintenance
paru -S snap-pac-grub
```

然后，请先打开一下 Btrfs Assistant 这个应用，退出后再运行下面这个：

```bash
paru -S snapper-support
```

# vscodium更换官方插件源

找到`vscodium`的安装的文件夹。这里，我的eos的路径是`/opt/vscodium-bin`

在`/opt/vscodium-bin/resources/app` 中找到`product.json` 这个文件。

打开该文件，找到如下内容：

```product.json
  "extensionsGallery": {
    "serviceUrl": "https://open-vsx.org/vscode/gallery",
    "itemUrl": "https://open-vsx.org/vscode/item"
  },
```

将其改为：

```product.json
    "extensionsGallery": {
        "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
        "itemUrl": "https://marketplace.visualstudio.com/items"
    },
```

保存后重启vscodium，更换完毕。

# 配置Wayland

```bash
paru -S wayland
paru -S plasma-wayland-session
paru -S pipewire
sudo cp -rp /usr/share/pipewire/* /etc/pipewire/
paru -S pipewire-pulse
systemctl --user enable pipewire.service
systemctl --user start pipewire.service
paru -S libpipewire
paru -S gst-plugin-pipewire
paru -S xdg-desktop-portal-kde
paru -S wayland-protocols
paru -S xdg-desktop-portal-gtk
```
