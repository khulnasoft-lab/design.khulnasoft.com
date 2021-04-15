# NVDA + Chrome setup

According to WebAIM’s [Screen Reader User Survey #8 Results](https://webaim.org/projects/screenreadersurvey8/#primary), the NVDA screen reader is the most commonly used. And while JAWS with Chrome is the most popular combination, NVDA with Chrome is not far behind. Given that JAWS may not be the best screen reader to test on, because it attempts to fill in the gaps or guess what label it should use based on context, and with [Chrome increasing in use over Firefox](https://webaim.org/projects/screenreadersurvey8/#browsers), the NVDA with Chrome combination is a safe bet moving forward.

The following instructions walk you through setup of an instance of Windows 10 with NVDA and Chrome through VirtualBox on macOS along with other utilities and tips along the way.

1. [Install and configure VirtualBox](#install-and-configure-virtualbox)
1. [Install Chrome](#)
1. [Install NVDA](#)
1. [Install Karibiner](#)

## Install and configure VirtualBox

1. Start by downloading and installing [VirtualBox](https://www.virtualbox.org/wiki/Downloads).
1. You'll need to download a Windows 10 Disc Image (ISO File). To do that, go to the [Windows 1o ISO page](https://www.microsoft.com/en-us/software-download/windows10ISO). Under the **Select edition** dropdown choose "Windows 10" and then select the **Confirm** button to continue.
1. Choose "English" as the product language and select **Confirm** to continue.
1. Select the **64-bit Download** button. The ISO file will be several GB and will take a few minutes to complete.
1. Open VirtualBox and select the **New** button that looks like a badge. A window will appear that begins the process of creating your Windows 10 instance. ![img]()
1. Using the "Expert mode", name your device and leave the other settings as default. Select the "Create a virtual hard disk now" option and then select **Create** to continue. ![img]()
1. You can start off with less space than default, here **30 GB** has been entered. Choose the "Fixed size" option. Using a predetermined size should help with performance since it won’t have to dynamically be allocated. Select **Create** to continue. ![img]()
1.Select the **Settings** button and a new window will open. Go to the **Storage** tab. 
1. In the left pane, choose the item with the CD icon. Then on the right, choose the CD icon and locate the ISO file you downloaded earlier. Select **OK** to continue. ![img]()
1. Back in the main VirtualBox window, double-click the name of your virtual machine to start it. A window will open where the ISO file should be selected to start from. Select the **Start** button.
1. The virtual machine should start and begin the Windows install. When you get to the **Activate Windows** screen, select the "I don't have a product key" option.
1. In the next panel, select the "Windows 10 Home" option and select **Next** to continue.
1. Accept the license and continue.
1. Choose the custom install option. In the resulting view the drive that was created should be highlighted. Select **Next** to continue. Windows will begin installing.
1. If you don't have an account, you'll need to create one to continue and complete the Windows setup. Once Windows is running, continue to the next section.

### Guest Additions

1. In the top menu for VirtualBox, select **Devices > Insert Guest Additions CD Image**. Guest Additions includes device drivers and system applications that optimize the guest OS for better performance and usability.
1. Now, back in Windows, navigate to the **CD Drive (D)** and double-click the **VBoxWindowsAdditions-amd64** file. Use the default install settings and choose to reboot.

### Shared clipboard

Being able to copy and paste from the host to guest can be very helpful.

1. In the top menu for VirtualBox, select **Devices > Shared Clipboard > Host to Guest** (or another setting if you prefer).

### Screen resize

There are several screen resize options, and you can choose what suites your preference.

1. Locate the monitor icon in the bottom right of the virtual machine window. Under the **Virtual Screen 1** item you'll find many options to choose from.

## Install Chrome

1. Using the default browser, Edge, navigate to…

## Install NVDA

1. Download…
1. Setup…
1. Speech to text window…

## Install Karabiner

Karabiner is a macOS app that allows you to remap keys. NVDA relies on the <key>insert</key> by default to run commands, which Mac keyboard don’t have. By using the utility you can remap an unused key to function in the same way.
