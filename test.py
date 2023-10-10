import nmap

def get_connected_devices():
    nm = nmap.PortScanner()
    # Adjust the following IP range according to your router's network range.
    # For example, '192.168.1.0/24' if your network is in the 192.168.1.x range.
    scan_result = nm.scan(hosts='192.168.1.0/24', arguments='-sn')

    connected_devices = {}
    for ip in scan_result['scan']:
        if 'mac' in scan_result['scan'][ip]['addresses']:
            mac_address = scan_result['scan'][ip]['addresses']['mac']
            connected_devices[ip] = mac_address

    return connected_devices

if __name__ == '__main__':
    devices = get_connected_devices()
    print(f"Number of connected devices: {len(devices)}")
    print("Connected devices and their MAC addresses:")
    for ip, mac in devices.items():
        print(f"Device IP: {ip}, MAC Address: {mac}")
