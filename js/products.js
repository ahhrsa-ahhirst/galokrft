// ===== PRODUCTS: add a product by adding one line to PRODUCTS. Prices are in rupees. =====
// p(id, name, category, price, kind, production time, description, {optional: sale, t (sample text), col, font, pop, plain, long})
// kind decides the customization fields: neon, led, board, plate, desk, qr, gift, wedding (see FIELDS in app.js)
const CATS=[["neon","Neon Name Lights","✨"],["shop","Shop & Business Signs","🏪"],["plate","Name Plates","🪧"],["acrylic","Acrylic Signs","🔷"],["led","LED & Light Products","💡"],["office","Home & Office","🏢"],["gifts","Gifts","🎁"],["qr","QR & Counter Stands","📱"],["wedding","Wedding & Event Signs","💍"],["custom","Custom Orders","🎨"]];
const p=(id,name,cat,price,kind,time,desc,x={})=>({id,name,cat,price,kind,time,desc,long:desc+" Our designer confirms the final design with you on WhatsApp before production.",t:name.split(" ")[0].toUpperCase(),col:"Pink",font:"Pacifico",...x});
const PRODUCTS=[
p(1,"Custom Neon Name Light","neon",1499,"neon","3–5 days","Your name in a glowing neon-style LED light.",{t:"RAHUL",pop:1}),
p(2,"Acrylic LED Name Plate","plate",999,"led","3–4 days","Backlit acrylic name plate for home or office.",{t:"Dr. Mehta",col:"Blue",font:"Satisfy",pop:1}),
p(3,"House Name Plate","plate",699,"plate","2–4 days","Elegant acrylic name plate for your gate or door.",{t:"Sharma Niwas",font:"Satisfy",col:"Blue",pop:1}),
p(4,"House Number Plate","plate",399,"plate","2–3 days","Weather-friendly house number plate.",{t:"B-204",font:"Bebas Neue",col:"Red"}),
p(5,"Shop Name Board","shop",2499,"board","5–7 days","Durable shop board with your name and logo.",{t:"SHARMA STORE",font:"Bebas Neue",col:"White",pop:1}),
p(6,"Salon Name Sign","shop",3499,"neon","5–7 days","Illuminated salon sign that stands out at night.",{t:"GLAM SALON",col:"Purple"}),
p(7,"Café Logo Sign","shop",3999,"neon","5–7 days","Warm glowing logo sign for cafés and restaurants.",{t:"CAFE 24",font:"Orbitron",col:"Yellow"}),
p(8,"Reception Logo","office",4999,"board","6–8 days","Professional logo wall sign for your reception.",{t:"ACME LTD",font:"Bebas Neue",col:"White"}),
p(9,"3D Acrylic Letters","acrylic",1999,"board","4–6 days","Cut-out 3D acrylic letters for walls and counters.",{t:"WELCOME",font:"Bebas Neue",col:"Yellow"}),
p(10,"QR Payment Stand","qr",299,"qr","1–2 days","Neat counter stand for your payment QR.",{t:"Scan & Pay",col:"Blue",plain:1,pop:1}),
p(11,"UPI QR Acrylic Stand","qr",399,"qr","1–2 days","Premium acrylic stand with your shop name.",{t:"Scan & Pay",col:"Green",plain:1}),
p(12,"OPEN/CLOSED Sign","led",1299,"led","3–4 days","Two-way LED OPEN/CLOSED sign.",{t:"OPEN",font:"Orbitron",col:"Green"}),
p(13,"Table Number Stand","qr",199,"qr","2–3 days","Acrylic table number stands for cafés.",{t:"TABLE 5",col:"White",plain:1}),
p(14,"Desk Name Plate","office",499,"desk","2–3 days","Desk name plate for cabins and counters.",{t:"MANAGER",font:"Bebas Neue",col:"Blue"}),
p(15,"Name Keychain","gifts",149,"gift","1–2 days","Personalised acrylic name keychain.",{t:"ANITA",col:"Purple",pop:1}),
p(16,"Acrylic Quote Plaque","gifts",599,"gift","2–3 days","A favourite quote on a desk plaque.",{t:"Dream Big",font:"Satisfy",col:"Pink"}),
p(17,"Wedding Neon Sign","wedding",4999,"wedding","5–7 days","Couple names in neon for the wedding stage.",{t:"Riya & Arjun",font:"Satisfy",pop:1}),
p(18,"Custom LED Logo Sign","led",5999,"led","7–10 days","Your logo as an illuminated LED sign.",{t:"YOUR LOGO",font:"Orbitron",col:"Blue"}),
p(19,"Door Name Plate","plate",599,"plate","2–3 days","Clean door plate for homes and offices.",{t:"Gupta",font:"Satisfy",col:"Blue"}),
p(20,"Custom Acrylic Logo Board","acrylic",2999,"board","5–7 days","Acrylic logo board for shops and offices.",{t:"YOUR BRAND",font:"Bebas Neue",col:"Pink"})];
const PACKAGES=[["Starter Shop Pack",2999,["Shop name board","QR stand","OPEN/CLOSED sign"]],["Café Pack",4999,["Logo sign","Table numbers","QR payment stand"]],["Salon Pack",5999,["Illuminated salon name","Reception sign","QR stand"]],["Office Pack",4999,["Reception logo","Cabin name plates","Door signs"]],["New Business Pack",7999,["Shop board","QR stand","Opening sign"]]];
// DEMO REVIEWS (fictional, not real customers)
const REVIEWS=[["Rahul S. ","Loved the neon name for my room. Easy to order."],["Priya V. ","Quick pickup and the plate looked great."],["Aman P. (Demo)","Designer helped with my shop logo sign."],["Neha G. ","Wedding sign was exactly what we imagined."],["Sandeep K. ","Bulk table stands for our café, smooth process."],["Meera J. ","UPI payment and WhatsApp updates were simple."]];
const FAQ=[["How long does a custom order take?","Most items take 2–7 days. Each product shows its production time; large signs may take longer."],["Can I customize the name?","Yes. Enter any name or text, choose font, color and size. We confirm the final design before production."],["Can I provide my own design or logo?","Yes. Send it on WhatsApp or use the Custom Order page."],["Can I send a logo?","Yes, send it on WhatsApp after placing your order."],["Do you offer pickup?","Yes. Pickup is free; we notify you when it is ready."],["Do you deliver?","Yes, local delivery is available. Delivery charge and the free-delivery limit are shown at checkout."],["How do I pay?","UPI (with your UTR/reference), or cash on pickup / delivery."],["What happens for orders above ₹5,000?","A 50% advance is needed before production. The remaining amount is paid later."],["Can I order something not shown?","Yes. Use Get a Custom Quote and describe your idea."],["Do you accept bulk orders?","Yes. Request a bulk quote for 10, 50 or 100+ pieces."],["Can I order wedding/event signage?","Yes. Share names, date and size and we will design it."]];
