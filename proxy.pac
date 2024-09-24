function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.uio.no")) {
    return "SOCKS5 127.0.0.1:9998";
  }

  return "DIRECT";
}