/**
 * Created with IntelliJ IDEA.
 * User: Jim_qiao
 * Date: 11/5/13
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */
;
(function ($) {
    $().ready(function () {
        function KeyCodeTool(target, btn, panel) {
            var obj = target;
            var keyArray = [];
            obj.keyup(function (event) {
                console.log(event.keyCode,event.);
            });
            btn.click(function (event) {
                panel.html("Hello world");
            });
        };

        var keyCodeTool = new KeyCodeTool($("body"), $("showBtn"), $("keyCodeContent"));
    });
})(jQuery);



8 = BackSpace BackSpace
9 = Tab Tab
12 = Clear
13 = Enter
16 = Shift_L
17 = Control_L
18 = Alt_L
19 = Pause
20 = Caps_Lock
27 = Escape Escape
32 = space space
33 = Prior
34 = Next
35 = End
36 = Home
37 = Left
38 = Up
39 = Right
40 = Down
41 = Select
42 = Print
43 = Execute
45 = Insert
46 = Delete
47 = Help
48 = 0 equal braceright
49 = 1 exclam onesuperior
50 = 2 quotedbl twosuperior
51 = 3 section threesuperior
52 = 4 dollar
53 = 5 percent
54 = 6 ampersand
55 = 7 slash braceleft
56 = 8 parenleft bracketleft
57 = 9 parenright bracketright
65 = a A
66 = b B
67 = c C
68 = d D
69 = e E EuroSign
70 = f F
71 = g G
72 = h H
73 = i I
74 = j J
75 = k K
76 = l L
77 = m M mu
78 = n N
79 = o O
80 = p P
81 = q Q at
82 = r R
83 = s S
84 = t T
85 = u U
86 = v V
keycode   87 = w W
keycode   88 = x X
keycode   89 = y Y
keycode   90 = z Z
keycode   96 = KP_0 KP_0
keycode   97 = KP_1 KP_1
keycode   98 = KP_2 KP_2
keycode   99 = KP_3 KP_3
keycode 100 = KP_4 KP_4
keycode 101 = KP_5 KP_5
keycode 102 = KP_6 KP_6
keycode 103 = KP_7 KP_7
keycode 104 = KP_8 KP_8
keycode 105 = KP_9 KP_9
keycode 106 = KP_Multiply KP_Multiply
keycode 107 = KP_Add KP_Add
keycode 108 = KP_Separator KP_Separator
keycode 109 = KP_Subtract KP_Subtract
keycode 110 = KP_Decimal KP_Decimal
keycode 111 = KP_Divide KP_Divide
keycode 112 = F1
keycode 113 = F2
keycode 114 = F3
keycode 115 = F4
keycode 116 = F5
keycode 117 = F6
keycode 118 = F7
keycode 119 = F8
keycode 120 = F9
keycode 121 = F10
keycode 122 = F11
keycode 123 = F12
keycode 124 = F13
keycode 125 = F14
keycode 126 = F15
keycode 127 = F16
keycode 128 = F17
keycode 129 = F18
keycode 130 = F19
keycode 131 = F20
keycode 132 = F21
keycode 133 = F22
keycode 134 = F23
keycode 135 = F24
keycode 136 = Num_Lock
keycode 137 = Scroll_Lock
keycode 187 = acute grave
keycode 188 = comma semicolon
keycode 189 = minus underscore
keycode 190 = period colon
keycode 192 = numbersign apostrophe
keycode 210 = plusminus hyphen macron
keycode 211 =
keycode 212 = copyright registered
keycode 213 = guillemotleft guillemotright
keycode 214 = masculine ordfeminine
keycode 215 = ae AE
keycode 216 = cent yen
keycode 217 = questiondown exclamdown
keycode 218 = onequarter onehalf threequarters
keycode 220 = less greater bar
keycode 221 = plus asterisk asciitilde
keycode 227 = multiply division
keycode 228 = acircumflex Acircumflex
keycode 229 = ecircumflex Ecircumflex
keycode 230 = icircumflex Icircumflex
keycode 231 = ocircumflex Ocircumflex
keycode 232 = ucircumflex Ucircumflex
keycode 233 = ntilde Ntilde
keycode 234 = yacute Yacute
keycode 235 = oslash Ooblique
keycode 236 = aring Aring
keycode 237 = ccedilla Ccedilla
keycode 238 = thorn THORN
keycode 239 = eth ETH
keycode 240 = diaeresis cedilla currency
keycode 241 = agrave Agrave atilde Atilde
keycode 242 = egrave Egrave
keycode 243 = igrave Igrave
keycode 244 = ograve Ograve otilde Otilde
keycode 245 = ugrave Ugrave
keycode 246 = adiaeresis Adiaeresis
keycode 247 = ediaeresis Ediaeresis
keycode 248 = idiaeresis Idiaeresis
keycode 249 = odiaeresis Odiaeresis
keycode 250 = udiaeresis Udiaeresis
keycode 251 = ssharp question backslash
keycode 252 = asciicircum degree
keycode 253 = 3 sterling
keycode 254 = Mode_switch