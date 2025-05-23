+++
title = "2024"
date = 2025-01-17
+++
# 2024
### 1月
可能是考试考的无聊了,我对窗口管理器产生兴趣，因为我觉得，桌面环境是冗杂的，强塞给我了许多我用不到的东西。
之前第一次听说窗口管理器这个概念,还是我从一个朋友那边听说的`dwm`，他将其作为c语言源码读物，并且跟我畅想自己如何在原来的基础上进行改进，比如集成ai交互功能。
在那之后,我一直使用的是`Endeavour OS`与`Garuda`这俩个`Arch Linux` 发行版自带的`KDE`桌面环境，这俩个发行版提供了一个美化过的`KDE`桌面，尤其是`Garuda`，自带的美化`KDE`看起来非常帅气。
`KDE`是令人尊敬的,好用的桌面环境，但正如之前我批判`Windows`的桌面比较臃肿一样，我渐渐觉得`KDE`也出现这种问题。当我下载`KDE`的时候，他总是会把`KDE`生态的一些软件一起捆绑安装了。
我在一次网络冲浪中偶然得知了窗口管理器,之前那位朋友说的`dwm`的时候，我其实压根没记住窗口管理器。当我发现这个东西利用几个快捷键，可以实现令人惊叹的窗口管理效率。
在传统桌面环境中,不仅是桌面整体冗杂，而且开一个软件，将其调整为合适的窗口，都需要鼠标去点击。而窗口管理器，能直接通过几个简单快捷键的去实现这个功能。
于是,我决定尝试一下窗口管理器。我考量了许多的窗口管理器，最后决定选用`Hyprland`。
后面发现使用窗口管理器,还需要与其他组件相配合，比如状态栏(`waybar`)，比如菜单(`rofi`)，顺便把一直以来的shell从`fish`换成`zsh`。而且，这些全部都是高度自定义的。自然而然的滚去写配置文件了。
配置文件配的令我痛苦,参考很多别人的配置，阅读官方文档，终于是配出了一个差强人意的Hyprland窗口管理器生态。直接在我的`Endeavour OS`上面把`KDE`卸载，安装上了`Hyprland`。
同时,我的建站差不多也是这个时候完成。我使用`debian12`作为我的服务器系统，`1panel`作为管理面板，`nginx`作为反向代理方案，建了一些有意思的东西，并用上了`cloudfront`的cdn。
在我另一位朋友的建议下,我进行了去`Google`化的工作，把所有的用`Google`注册的账号进行焚烧，换成`disroot`与`murena`邮箱，同时，也逃离`cloudflare`，把我的域名DNS迁移到`Netlify`上面。
###  2月
在家憋`neovim`的配置,非常魔怔。
我对`NixOS`感兴趣,也是偶然听说的，秉承着每一个著名Linux的发行版，都要过去品鉴一下的想法，去了解了一下`NixOS`。感觉函数声明式配置整个系统是我的梦想中的安装系统的方式，果断入坑。反思了一下之前`Arch Linux`的使用经历，安装软件多，导致自己都不知道装了哪些东西，问题偶发，重装更是家常便饭。如果系统直接由配置文件进行设置，而且是原子性的，那我的系统会十分的安全透明，而且也是高度自定义。
经过之前配置`Hyprland`的痛苦经历,这次直接学聪明了，直接抄了一个别人非常完善的配置，在此基础上进行修改。
### 3月
先购置了一台二手手机,进行了一波刷机。再在`Virtual Box`上面测试我的nixos配置。测试的差不多之后，直接把`Arch Linux`卸载了，换装`NixOS`。经过事后来看，`NixOS`稳定性极佳，在2024年剩下的时间里，除了某些不可抗拒的天灾人怨，`NixOS`一直运行良好。
从此,我的硬盘结构为一个512G的m2固态专门装一个`NixOS`，一个2t的m2固体拿来做`Ventoy`战斗盘，我的`Windows`封装为虚拟磁盘和linux镜像文件，都由`Ventoy`进行引导。
### 4月
开始研究分体键盘,之前偶然从某个up主的技术视频里面，看到了他所使用的，符合人体工程学的分体键盘，在购物平台搜索无法找到，后面发现这种键盘是自己制作的。资料全部开源。我选择了最简单的`Corne`分体键盘作为我的入门之作。根据`corne`官方和别人教学视频给出的物料单，我购置了键盘的pcb板，二极管，led灯，微动开关，耳机孔，主控板，屏幕，还有电烙铁与一系列的焊接工具，自己尝试焊接制作分体键盘。
这是我第一次焊接,我预料到了我会问题频发，又买了一些练习用的pcb板和电阻以供练习。在练习的差不多后，我惊讶的发现，我的主控板的针脚多出来一对，我当时完全不知道怎么处理，只是想着确定一下针脚信号的，把多出来的一对针脚剪掉，但是我尝试了我所有的工具，无法剪断针脚，于是我把针脚用力掰弯，勉强可以焊接。但是，当我把物料都焊接到键盘pcb板的时候才发现，主控在我的摧残之下，已经坏掉了。不仅是失败了，还直接损失了百来块。
了解其他的终端编辑器,特别是`Helix`，我提出了这样一个观点:"现代的工具应该提供开箱即用和简单化的配置，`vscode`就是这样一个典范"
### 5月
由于想尝试不同的`Linux`发行版,又不想在虚拟机上面体验(我觉得虚拟机有点延迟和卡顿，当时还没用上`qemu`，如果用上了就不会这么认为了)，我想起了`Ventoy`可以引导linux的虚拟磁盘。便开始制作各种linux的虚拟磁盘，这个叫做`vtoy`，我先后制作了:
`UOS`(刚开始很看好,大名鼎鼎，后面发现正常用需要激活，得花钱购买)
`Deepin`(`DEE`桌面环境非常好,基本是`UOS`的免费版，linux内核有点旧，我安装nvidia驱动的时候还遇到非常多的问题但后面全部制服了，应用商店看起来国产生态很不错，有些软件还是会有问题，不过都在慢慢改进，作为一个办公系统还是不错的，我后面把他当作我的b站播放器了)
`Kali Linux`(大名鼎鼎,但是最新镜像制作出来的`vtoy`用引导，进入系统会非常卡顿，会卡在加载logo大概2分钟，用旧版本的感觉又少了点什么东西，不舒服)
`Fedora`(我不装Nvidia闭源驱动,就能正常驱动我的显卡，感觉非常强大，这在之前无法想象)。
`Ubuntu`(这是我第一次用`Ubuntu`,没什么感觉，接外接屏幕会偶尔出现屏幕撕裂)
`Debian12`(这个直接跟你说`Debian12`不支持)
`Athena OS`(另一个网络安全的系统,是基于`Black Arch`的软件源，装的是arch的版本，这个直接无法引导)
`CachyOS`(一切正常)
### 6,7月
我的另一个朋友对硬件比较专业,我叫上他再战分体键盘。经过他的指导，还有他帮助我打印pcb板，3D打印分体键盘外壳。我这回买对了主控板，直接成功做出来2副分体键盘，1副自用，1副送朋友了。
用了分体键盘,感觉非常好用。只是比较遗憾这种东西没有键盘厂家去做这样的小众产品。
继续研究Unix文化,发现了`FreeBSD`，大大扩展了我的眼界。我发现我笔记本无法正常安装`FreeBSD`桌面(xorg有问题，连带着wayland也有问题，以后面的视角来看，是自己太年轻了，其实是可以解决的)，于是在虚拟机和从同学那里借来的老式笔记本上面安装测试。
### 8月
研究了一下ctf相关的东西。
### 9月
在我的x79平台上面安装`PVE`,进行研究硬件直通，以此，我成功的把虚拟机里的显示信号通过显卡输出到我的显示器上面。非常高兴，我直接安装`FreeBSD`，参考我之前研究的配置，配好了`Hyprland`,`waybar`,`rofi`,`neovim`等工具，用了一段时间发现，鼠标会有拖影，`Hyprland`会闪退。
然后,在`PVE`虚拟机里面安装黑苹果，特地买了显卡，结果发现无法直通视频信号，原来是虚拟借机必须启用`UEFI`，我x79是`Legacy Bios`，显卡也不支持`UEFI`，于是给显卡刷了支持`UEFI`的`vbios`，结果发现显卡有点问题，本来应该是免驱卡无法免驱，于是又买了一个另外型号的免驱卡，结果依然不支持`UEFI`。
### 10月
送了同学一个x79板u,送前成功安装了一个黑苹果，结果体验发现，有些软件无法安装，推测cpu缺少指令集了。
被黑苹果和`FreeBSD`整红温了,一气之下组了一个3.4L的核显itx。然后，成功制服了我的笔记本`FreeBSD`的xorg和wayland的问题。后面，给itx安装`Ventoy`,`黑苹果`和`NixOS`,十分喜爱。
深入了解`FreeBSD`,发现之前自己被`Linux`下的苦难哲学所束缚，从之前的开源小将开始转变，用我的话说就是"差不多得了"。
认识到`Linux`社区有局限性。后面放弃除`NixOS`外的linux,转向`FreeBSD`作为主力系统使用。
`FreeBSD`非常完美,我几乎是无缝从`Linux`迁移到`FreeBSD`，比`Ubuntu`软件源多，比`Arch Linux`稳定，摒弃了systemd，甚至有高效的linux兼容层。
### 11,12月
之前的`Astro`博客爆炸了,迁移为`zola`博客。
将我的服务器从`Debian12`全部迁移为`NixOS`,使用配置文件来管理我的服务器，十分高效。反代也从`nginx`换成更加现代的`traefik`，工作的十分正常和成功。
申请并配置了一手`DN42`。
