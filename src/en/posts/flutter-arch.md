---
title: "Flutter Development Environment Guide on Arch Linux"
translationKey: "flutter-arch"
---

Flutter can be a pain to setup on Arch Linux when using native packages. I like to use Visual Studio Code with most of my software development and I found a way to integrate Flutter with vscode as well.

## Dependencies

* [flutter](https://aur.archlinux.org/packages/flutter)
* [jre8-openjdk](https://archlinux.org/packages/extra/x86_64/jre8-openjdk/)
* [android-sdk](https://aur.archlinux.org/packages/android-sdk)
* [ungoogled-chromium](https://aur.archlinux.org/packages/ungoogled-chromium)
* [code](https://archlinux.org/packages/community/x86_64/code/)


## Configuration

### Shell

#### (Ungoogled) Chromium
```zsh
export CHROME_EXECUTABLE=chromium
```

#### Android SDK Paths

```zsh
export ANDROID_SDK_ROOT='/opt/android-sdk'
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools/
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin/
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator/
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/
```

### Flutter

```zsh
sudo groupadd flutterusers
sudo gpasswd -a $USER flutterusers
sudo chown -R :flutterusers /opt/flutter
sudo chmod -R g+w /opt/flutter/
```

### Android SDK

```zsh
sudo groupadd android-sdk
sudo gpasswd -a $USER android-sdk
sudo setfacl -R -m g:android-sdk:rwx /opt/android-sdk
sudo setfacl -d -m g:android-sdk:rwX /opt/android-sdk
```

### Visual Studio Code

## Troubleshooting

`doas rm -rf /opt/flutter/.git/FETCH_HEAD`

If that fails, entirely delete the cache.

`doas rm -rf /opt/flutter/cache` and `doas rm -rf /opt/flutter/.pub-cache`