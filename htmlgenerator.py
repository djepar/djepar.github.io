file = open("html.txt", "w")
for i in range(30):
    file.write("<div class=container{}></div>\n".format(i))
