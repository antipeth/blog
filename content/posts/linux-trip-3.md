+++
title = "第三回，探幽寻秘APPS新，解CONFIG奇趣入眼前"
date = 2024-02-08
+++

# 第三回，探幽寻秘APPS新，解CONFIG奇趣入眼前
2024-02-08
# 1.安装字体

包管理器安装字体

或者解压到~/.local/share/fonts/用户目录下

或者解压到/usr/share/fonts/系统目录下

相关命令

```bash
fc-cache -fv
fc-list # 列出所有字体，搭配grep找字体
fc-list | grep "name"
fc-list : family | grep "name"
fc-list : family style | grep "name"
fc-list : file | grep "name"
sudoedit /etc/fonts/local.conf
paru -S imagemagick # 字体图片预览 
display name.ttf 
paru -S fontpreview # 字体预览
fontpreview
```

# 2.安装zsh

```bash
paru -S zsh
chsh -s /usr/bin/zsh
```

然后重启一下。打开终端即可切换成功。

刚进终端，因为本地没有`.zshrc`，会要求你选择生成配置`.zshrc`。

输0即可。生成最小配置。

# 3.安装zsh的插件

## (0).为什么不使用插件管理器

1.人们将`Oh My Zsh`与`zsh`混为一谈，认为运行`Oh My Zsh`就是在运行`zsh`，又或是认为使用`zsh`离不开`Oh My Zsh`。

2.`zsh`是一个纯粹的`shell`，不是别的东西的附庸。`Oh My Zsh`是一个插件管理器，一个框架。

3.别人可能会为了方便而创建别名。比如将一个提供彩色显示文件名的脚本设置别名为`ls`，是俩个不同的东西，在某些情况下会造成紊乱。

4.每个`zsh插件`本质都是`.zsh脚本`运行在`shell`当中，使用`Oh My Zsh`会误以为插件管理器做了一些额外的东西。

5.zsh设置插件只需要把插件下载下来(git clone)，如何在.zshrc文件中添加`source /创建的位置`。

6.与`vim`中插件的区别。`zsh插件`本质都是`.zsh脚本`，就简单，根本不需要更新，也就不需要包管理器去实现方便更新的功能。

7.`Oh My Zsh`的配置逻辑有点复杂，不如直接在`zshrc`中用`shell语法`进行配置。

## (1).主题

[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)

```zsh
paru -S zsh-theme-powerlevel10k
```

编辑`.zshrc` 文件。

```.zshrc
# 延迟加载插件,一定放在1行
autoload -U compinit && compinit
source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme
```

重启终端，进入主题的设置页面。按照提示一步一步设置成自己喜欢看的样子。

## (2).高亮

[https://github.com/zsh-users/zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

```zsh
paru -S zsh-syntax-highlighting
```

编辑`.zshrc` 文件。

```.zshrc
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

重启终端，即可看到高亮效果。

## (3).自动建议

[GitHub - zsh-users/zsh-autosuggestions: Fish-like autosuggestions for zsh](https://github.com/zsh-users/zsh-autosuggestions)

```zsh
paru -S zsh-autosuggestions
```

在`.zshrc` 文件末尾添加。

```.zshrc
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## (4).历史子字符串搜索

[GitHub - zsh-users/zsh-history-substring-search: 🐠 ZSH port of Fish history search (up arrow)](https://github.com/zsh-users/zsh-history-substring-search)

```zsh
paru -S zsh-history-substring-search
```

在`.zshrc` 文件末尾添加。

```.zshrc
# If you want to use zsh-syntax-highlighting along with this script, then make sure that you load it before you load this script
source /usr/share/zsh/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh

bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down
```

## (5).自动通知

[GitHub - MichaelAquilina/zsh-auto-notify: ⏰ ZSH plugin that automatically sends out a notification when a long running task has completed.](https://github.com/MichaelAquilina/zsh-auto-notify)

```zsh
paru -S dunst
# Linux X/Wayland (Requires notify-send to be installed)
paru -S notify-send-rs-bin
paru -S zsh-auto-notify
```

在`.zshrc` 文件末尾添加。

```.zshrc
source /usr/share/zsh/plugins/zsh-auto-notify/auto-notify.plugin.zsh
# Set threshold to 10seconds
export AUTO_NOTIFY_THRESHOLD=10
export AUTO_NOTIFY_TITLE="Hey! %command has just finished"
export AUTO_NOTIFY_BODY="It completed in %elapsed seconds with exit code %exit_code"
# Set notification expiry to 10 seconds(10000ms)
export AUTO_NOTIFY_EXPIRE_TIME=10000
# redefine what is ignored by auto-notify
export AUTO_NOTIFY_IGNORE=(
    "man" "sleep" "vim" "nvim" "less" " more" "nano"
)
```

## (6).你应该用

[GitHub - MichaelAquilina/zsh-you-should-use: 📎 ZSH plugin that reminds you to use existing aliases for commands you just typed](https://github.com/MichaelAquilina/zsh-you-should-use)

```zsh
paru -S zsh-you-should-use
```

在`.zshrc` 文件末尾添加。

```.zshrc
source /usr/share/zsh/plugins/zsh-you-should-use/you-should-use.plugin.zsh
```

# 4.安装alacritty终端

```bash
paru -S alacritty
```

# 5.添加alacritty配置文件

在~/.config/alacritty/下创建`alacritty.toml`和`catppuccin-mocha.toml`

选用`JetBrainsMono`字体，请下载压缩包 https://download.jetbrains.com/fonts/JetBrainsMono-2.304.zip ，并解压至`~/.local/share/fonts/Jetbrains`目录下 

```alacritty.toml
import = ["/home/opeth/.config/alacritty/catppuccin-mocha.toml"]

[colors]
draw_bold_text_with_bright_colors = true

[font]
size = 7

[font.bold]
family = "JetBrainsMono Nerd Font"
style = "Bold"

[font.bold_italic]
family = "JetBrainsMono Nerd Font"
style = "Bold Italic"

[font.italic]
family = "JetBrainsMono Nerd Font"
style = "Italic"

[font.normal]
family = "JetBrainsMono Nerd Font"
style = "Regular"

[[keyboard.bindings]]
action = "SpawnNewInstance"
key = "Return"
mods = "Super|Shift"

[scrolling]
history = 10000
multiplier = 3

[selection]
save_to_clipboard = false

[shell]
program = "/usr/bin/zsh"

[window]
opacity = 0.6

[window.class]
general = "Alacritty"
instance = "Alacritty"

[window.padding]
x = 10
y = 10
```

创建主题配置。

```catppuccin-mocha.toml
[[colors.indexed_colors]]
color = "#FAB387"
index = 16

[[colors.indexed_colors]]
color = "#F5E0DC"
index = 17

[colors.bright]
black = "#585B70"
blue = "#89B4FA"
cyan = "#94E2D5"
green = "#A6E3A1"
magenta = "#F5C2E7"
red = "#F38BA8"
white = "#A6ADC8"
yellow = "#F9E2AF"

[colors.cursor]
cursor = "#F5E0DC"
text = "#1E1E2E"

[colors.dim]
black = "#45475A"
blue = "#89B4FA"
cyan = "#94E2D5"
green = "#A6E3A1"
magenta = "#F5C2E7"
red = "#F38BA8"
white = "#BAC2DE"
yellow = "#F9E2AF"

[colors.hints.end]
background = "#A6ADC8"
foreground = "#1E1E2E"

[colors.hints.start]
background = "#F9E2AF"
foreground = "#1E1E2E"

[colors.normal]
black = "#45475A"
blue = "#89B4FA"
cyan = "#94E2D5"
green = "#A6E3A1"
magenta = "#F5C2E7"
red = "#F38BA8"
white = "#BAC2DE"
yellow = "#F9E2AF"

[colors.primary]
background = "#1E1E2E"
bright_foreground = "#CDD6F4"
dim_foreground = "#CDD6F4"
foreground = "#CDD6F4"

[colors.search.focused_match]
background = "#A6E3A1"
foreground = "#1E1E2E"

[colors.search.matches]
background = "#A6ADC8"
foreground = "#1E1E2E"

[colors.selection]
background = "#F5E0DC"
text = "#1E1E2E"

[colors.vi_mode_cursor]
cursor = "#B4BEFE"
text = "#1E1E2E"
```

# 6.安装终端文件管理器YAZI

For instance, if your terminal is Alacritty, which doesn't support displaying images itself, but you are running on an X11/Wayland environment, it will automatically use the "Window system protocol" to display images -- this requires you to have [Überzug++](https://github.com/jstkdng/ueberzugpp) installed.

来自`yazi`的GitHub。需要安装`ueberzugpp`用来显示图像。

```zsh
paru -S ueberzugpp
paru -S yazi ffmpegthumbnailer unarchiver jq poppler fd ripgrep fzf zoxide
```

# 7.安装应用启动器rofi

```zsh
paru -S rofi
```

# 8.配置rofi

在~/.config/rofi/目录下创建`config.rasi`文件。

```config.rasi
configuration {
  display-drun: "Applications:";
  display-window: "Windows:";
  drun-display-format: "{name}";
  font: "JetBrains Mono";
  // modi: "window,run,drun,emoji,calc";

  // enabling the icons
  show-icons: true;
  icon-theme: "Papirus";
}

@theme "/dev/null"

* {
  bg: #1e1e2e66;
  bg-alt: #585b7066;
  bg-selected: #31324466;

  fg: #cdd6f4;
  fg-alt: #7f849c;


  border: 0;
  margin: 0;
  padding: 0;
  spacing: 0;
}

window {
  width: 30%;
  background-color: @bg;
}

element {
  padding: 8 12;
  background-color: transparent;
  text-color: @fg-alt;
}

element selected {
  text-color: @fg;
  background-color: @bg-selected;
}

element-text {
  background-color: transparent;
  text-color: inherit;
  vertical-align: 0.5;
}

element-icon {
  size: 14;
  padding: 0 10 0 0;
  background-color: transparent;
}

entry {
  padding: 12;
  background-color: @bg-alt;
  text-color: @fg;
}

inputbar {
  children: [prompt, entry];
  background-color: @bg;
}

listview {
  background-color: @bg;
  columns: 1;
  lines: 10;
}

mainbox {
  children: [inputbar, listview];
  background-color: @bg;
}

prompt {
  enabled: true;
  padding: 12 0 0 12;
  background-color: @bg-alt;
  text-color: @fg;
}

/* vim: ft=sass
```

我的配置比较简单，运行

```zsh
rofi -show drun
```

调出启动器。

# 9.状态栏waybar

虽然KDE有提供状态栏，但是我更喜欢这种自己定义的，比较清爽。

```zsh
paru -S waybar
```

在`~/.config/waybar`目录下创建`config`文件。

```config
{
    "layer": "top",
    "height": 35,
    "spacing": 5,
    // Choose the order of the modules
    "modules-left": [
        "hyprland/workspaces"
    ],
    "modules-center": [
        "clock",
        "wlr/taskbar"
    ],
    "modules-right": [
        "cpu",
        "memory",
        "disk",
        "pulseaudio",
        "network",
        "battery",
        "custom/power"
    ],
    "hyprland/workspaces": {
        "disable-scroll": true,
        "all-outputs": true,
        "on-click": "activate"
    },
    "tray": {
        // "icon-size": 21,
        "spacing": 12
    },
    "clock": {
        "tooltip-format": "<big>{:%Y %B}</big>\n<tt><small>{calendar}</small></tt>",
        "format": " {:%H:%M   %a %b%d}"
    },
    "wlr/taskbar": {
    "format": "{icon}",
    "icon-size": 14,
    "icon-theme": "Numix-Circle",
    "tooltip-format": "{title}",
    "on-click": "activate",
    "on-click-right": "close",
    "ignore-list": [
       "Alacritty",
       "kitty"
    ]
    },
    "battery": {
        "states": {
            // "good": 95,
            "warning": 30
        },
        "format": "{icon} {capacity}%",
        "format-charging": " {capacity}%",
        "format-plugged": "󰂄 {capacity}%",
        // "format-good": "", // An empty format will hide the module
        // "format-full": "",
        "format-icons": [
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    "disk": {
        "interval": 300,
        "format": "󰋊 {free}",
        "path": "/"
    },
    "memory": {
        "interval": 30,
        "format": " {}%",
        "max-length": 10
    },

    "cpu": {
        "interval": 1,
        "format": " {usage}%" 
    },
    "network": {
        "tooltip": false,
        "format-wifi": "󰖩 {essid}",
        "format-disconnected": "睊",
        "format-ethernet": "",
        "on-click": "rofi-wifi-menu" 
    },
    "pulseaudio": {
        // "scroll-step": 1, // %, can be a float
        "format": "󰕾 {volume}%",
        "format-muted": "󰖁{volume}%",
        "on-click": "pavucontrol"
    },
    "custom/power": {
        "format": "󰤆",
        "on-click": "powermenu"
    },
    "custom/media": {
        "format": "{icon} {}",
        "return-type": "json",
        "max-length": 40,
        "format-icons": {
            "spotify": "",
            "default": "🎜"
        },
        "escape": true,
        "exec": "$HOME/.config/waybar/mediaplayer.py 2> /dev/null" // Script in resources folder
        // "exec": "$HOME/.config/waybar/mediaplayer.py --player spotify 2> /dev/null" // Filter player based on name
    }
}
// vim: ft=jsonc
```

在`~/.config/waybar`目录下创建`style.css`文件。定义状态栏的样式。

```style.css
@define-color base #1e1e2e;
@define-color mantle #181825;
@define-color crust #11111b;

@define-color text #cdd6f4;
@define-color subtext0 #a6adc8;
@define-color subtext1 #bac2de;

@define-color surface0 #313244;
@define-color surface1 #45475a;
@define-color surface2 #585b70;

@define-color overlay0 #6c7086;
@define-color overlay1 #7f849c;
@define-color overlay2 #9399b2;

@define-color blue #89b4fa;
@define-color lavender #b4befe;
@define-color sapphire #74c7ec;
@define-color sky #89dceb;
@define-color teal #94e2d5;
@define-color green #a6e3a1;
@define-color yellow #f9e2af;
@define-color peach #fab387;
@define-color maroon #eba0ac;
@define-color red #f38ba8;
@define-color mauve #cba6f7;
@define-color pink #f5c2e7;
@define-color flamingo #f2cdcd;
@define-color rosewater #f5e0dc;

* {
  font-family: JetBrains Mono;
  font-size: 13px;
}

window#waybar {
  background-color: @crust;
  color: @text;
  transition-property: background-color;
  transition-duration: .5s;
}

window#waybar.hidden {
  opacity: 0.2;
}

/*
window#waybar.empty {
    background-color: transparent;
}
window#waybar.solo {
    background-color: #FFFFFF;
}
*/

window#waybar.termite {
  background-color: #3F3F3F;
}

window#waybar.chromium {
  background-color: #000000;
  border: none;
}

button {
  /* Use box-shadow instead of border so the text isn't offset */
  box-shadow: inset 0 -3px transparent;
  /* Avoid rounded borders under each button name */
  border: none;
  border-radius: 0;
}

/* https://github.com/Alexays/Waybar/wiki/FAQ#the-workspace-buttons-have-a-strange-hover-effect */

#workspaces button:hover {
  background: @surface0;
  border: @surface0;
}

#workspaces button {
  padding: 0 8px;
  color: @text;
  border-radius: 15px;
  margin: 5px 0 5px 5px;
}

#workspaces button.selected {
  background-color: @text;
}

#workspaces button.active {
  background-color: @surface0;
}

#workspaces button.urgent {
  background-color: @red;
  color: @crust;
}

#clock,
#battery,
#cpu,
#memory,
#disk,
#temperature,
#backlight,
#network,
#pulseaudio,
#wireplumber,
#custom-power,
#custom-updates,
#tray,
#mode,
#idle_inhibitor,
#scratchpad,
#mpd {
  padding: 0 12px;
  background-color: @base;
  color: @crust;
  border-radius: 15px;
  margin: 5px 0;
}

#window,
#workspaces {
  margin: 0 4px;
}

/* If workspaces is the leftmost module, omit left margin */
.modules-left>widget:first-child>#workspaces {
  margin-left: 0;
}

/* If workspaces is the rightmost module, omit right margin */
.modules-right>widget:last-child>#workspaces {
  margin-right: 0;
}

label:focus {
  background-color: #000000;
}

#clock {
  color: @text;
}

#custom-updates {
  color: @red;
}

#memory {
  color: @sky;
}

#cpu {
  color: @teal;
}

#disk {
  color: @peach;
}

#pulseaudio {
  color: @yellow;
}

#pulseaudio.muted {
  color: @overlay1;
}

#network {
  color: @green;
}

#network.disconnected {
  color: @overlay1;
}

#battery {
  color: @blue;
}

#battery.warning:not(.charging) {
  background-color: @red;
  color: @crust;
}

#custom-power {
  color: @mauve;
}

#keyboard-state>label {
  padding: 0 5px;
}

#keyboard-state>label.locked {
  background: rgba(0, 0, 0, 0.2);
}

#scratchpad {
  background: rgba(0, 0, 0, 0.2);
}

#scratchpad.empty {
  background-color: transparent;
}

/* vim: ft=sass
*/
```

在`config`文件中，我们还定义了一个`powermenu`和`rofi-wifi-menu`。

这是我的自定义脚本。

在/usr/bin/目录下，创建`powermenu`。

```powermenu
#! /bin/sh

chosen=$(printf "  Power Off\n  Restart\n  Suspend\n  Hibernate\n  Log Out\n  Lock" | rofi -dmenu -i -theme-str '@import "power.rasi"')

case "$chosen" in
    "  Power Off") poweroff ;;
    "  Restart") reboot ;;
    "  Suspend") systemctl suspend-then-hibernate ;;
    "  Hibernate") systemctl hibernate ;;
    "  Log Out") bspc quit ;;
    "  Lock") betterlockscreen -l ;;
    *) exit 1 ;;
esac
```

在~/.config/rofi/目录下，创建`power.rasi`文件。

```power.rasi
inputbar {
  children: [entry];
}

listview {
    lines: 6;
}
```

在/usr/bin/目录下，创建`rofi-wifi-menu`。

```rofi-wifi-menu
#!/usr/bin/env bash

notify-send "Getting list of available Wi-Fi networks..."
# Get a list of available wifi connections and morph it into a nice-looking list
wifi_list=$(nmcli --fields "SECURITY,SSID" device wifi list | sed 1d | sed 's/  */ /g' | sed -E "s/WPA*.?\S/ /g" | sed "s/^--/ /g" | sed "s/  //g" | sed "/--/d")

connected=$(nmcli -fields WIFI g)
if [[ "$connected" =~ "enabled" ]]; then
    toggle="󰖪  Disable Wi-Fi"
elif [[ "$connected" =~ "disabled" ]]; then
    toggle="󰖩  Enable Wi-Fi"
fi

# Use rofi to select wifi network
chosen_network=$(echo -e "$toggle\n$wifi_list" | uniq -u | rofi -dmenu -i -selected-row 1 -p "Wi-Fi SSID: " )
# Get name of connection
read -r chosen_id <<< "${chosen_network:3}"

if [ "$chosen_network" = "" ]; then
    exit
elif [ "$chosen_network" = "󰖩  Enable Wi-Fi" ]; then
    nmcli radio wifi on
elif [ "$chosen_network" = "󰖪  Disable Wi-Fi" ]; then
    nmcli radio wifi off
else
    # Message to show when connection is activated successfully
      success_message="You are now connected to the Wi-Fi network \"$chosen_id\"."
    # Get saved connections
    saved_connections=$(nmcli -g NAME connection)
    if [[ $(echo "$saved_connections" | grep -w "$chosen_id") = "$chosen_id" ]]; then
        nmcli connection up id "$chosen_id" | grep "successfully" && notify-send "Connection Established" "$success_message"
    else
        if [[ "$chosen_network" =~ "" ]]; then
            wifi_password=$(rofi -dmenu -p "Password: " )
        fi
        nmcli device wifi connect "$chosen_id" password "$wifi_password" | grep "successfully" && notify-send "Connection Established" "$success_message"
    fi
fi
```

waybar配置完成。
