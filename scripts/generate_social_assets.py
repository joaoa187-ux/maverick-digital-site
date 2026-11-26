from pathlib import Path
import cairosvg
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import io, math

root=Path(__file__).resolve().parents[1]
logo=(root/'assets/logo-maverick.svg').read_bytes()
# Official logo rendered to a transparent, high-resolution square touch icon.
cairosvg.svg2png(bytestring=logo, write_to=str(root/'assets/apple-touch-icon.png'), output_width=180, output_height=180)
# Social preview: branded background, official mark, and concise positioning.
W,H=1200,630
im=Image.new('RGB',(W,H),(5,15,37))
px=im.load()
for y in range(H):
    for x in range(W):
        glow=max(0,1-math.sqrt(((x-930)/700)**2+((y-260)/480)**2))
        px[x,y]=(int(5+2*glow),int(15+28*glow),int(37+48*glow))
# Subtle orbital rings
d=ImageDraw.Draw(im)
for box,fill in [((730,55,1160,485),(13,102,178)),((775,95,1115,445),(0,170,205))]:
    d.ellipse(box,outline=fill,width=2)
# Render official symbol over the right side
logo_png=cairosvg.svg2png(bytestring=logo,output_width=330,output_height=330)
mark=Image.open(io.BytesIO(logo_png)).convert('RGBA')
im.paste(mark,(785,145),mark)
# Fonts
font_paths=['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf','/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf']
reg_paths=['/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf','/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf']
def load(paths,size):
    for p in paths:
        if Path(p).exists(): return ImageFont.truetype(p,size)
    return ImageFont.load_default()
bold=load(font_paths,58); regular=load(reg_paths,27); small=load(font_paths,17)
d=ImageDraw.Draw(im)
d.rounded_rectangle((72,82,285,120),radius=18,fill=(0,105,150))
d.text((92,91),'ESTRATÉGIA  •  TECNOLOGIA',font=small,fill=(215,245,255))
d.text((72,178),'MAVERICK',font=bold,fill=(246,250,255))
d.text((72,250),'DIGITAL',font=load(font_paths,38),fill=(0,216,233))
d.rounded_rectangle((72,330,600,333),radius=2,fill=(0,216,233))
d.text((72,372),'Estratégia, tecnologia e crescimento.',font=regular,fill=(192,211,234))
d.text((72,424),'Presença digital que conecta empresas',font=regular,fill=(192,211,234))
d.text((72,464),'às pessoas certas.',font=regular,fill=(192,211,234))
im.save(root/'assets/og-maverick.png',format='PNG',optimize=True)
