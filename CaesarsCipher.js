function rot13(str) {
    return str.split("").map((e) => String.fromCharCode(e.charCodeAt() >= 78 ? e.charCodeAt()- 13 : e.charCodeAt() >= 65 ? e.charCodeAt() + 13 : e.charCodeAt())).join("")
}