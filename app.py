from flask import Flask, render_template_string
import random

laban_efforts = [
    'Dabbing (Sudden, direct & light)','Flicking (Sudden, indirect & light)',
    'Pressing (Sustained, direct & strong)','Thrusting (Sudden, direct & strong)',
    'Gliding (Sustained, direct & light)','Floating (Sustained, indirect & light)',
    'Wringing (Sustained, indirect & strong)','Slashing (Sudden, indirect & strong)'
]

placement = [
    'Nose','Throat (Kermit the Frog style)','Chest',    
]

air_quality = [
    'Breathy','Dry',
]

age = [
    'Young','Middle aged','Old',
]

gender = [
    'Woman','Man','Non-Binary person','Agender person',
]

size = [
    'Small','Medium','Large',
]

tempo = [
    'Slow','Medium','Fast',
]

volume = [
    'Quiet','Medium','Loud',
]

attitude = [
    'Friendly','Impartial','Agressive',
]

accents  = [
    'Texas','Oklahoma',
    'Kentucky','General American',
    'General American','Southern California',
    'Scottish','Northern England','Cockney','Welsh'
]

vocal_issues = [
    'Raspy','Lisp','Mumbler','None',
]

def generate_random_name():
    return random.choice([
        "Herman Tomfoolery",
        "Bickering Karlstobber the Fourth",
        "Northridge Valpartment",
        "Bee, an Actual Bee, Comma Bee",
        "Gol Den Retriever",
        "Beet Farm",
        "Northen Oppenheim",
        "Billibar of Southduke",
        "Bandford Situation",
        "Bark Phoenix"
    ])

def generate_random_voice():
    return {
        "laban_effort": random.choice(laban_efforts),
        'placement': random.choice(placement),
        'air_quality': random.choice(air_quality),
        'age': random.choice(age),
        'gender': random.choice(gender),
        'size': random.choice(size),
        'tempo': random.choice(tempo),
        'volume': random.choice(volume),
        'attitude': random.choice(attitude),
        'accent': random.choice(accents),
        'vocal_issue': random.choice(vocal_issues)        
       
    }

app = Flask(__name__)

@app.route("/")
def generate():
    name = generate_random_name()
    voice = generate_random_voice()

    if voice['attitude'] == 'Friendly':
        n = ""
    else:
        n = "n"

    # gender inclusiiiiiiiiiive
    if voice['gender'] == 'Man':
        pronoun = {"sub":"he","object":"him","pos":"his","be":"are"}
        be = "is"
        s = "s"
        ag_n = ""
    elif voice['gender'] == 'Woman':
        pronoun = {"sub":"she","object":"she","pos":"her","be":"are"}
        be = "is"
        s = "s"
        ag_n = ""
    elif voice['gender'] == 'Agender person':
        pronoun = {"sub":"they","obj":"them","pos":"their","be":"are"}
        be = "are"
        s = ""
        ag_n = "n"
    else:
        pronoun = {"sub":"they","obj":"them","pos":"their","be":"are"}
        be = "are"
        s = ""
        ag_n = ""

    br = "<br />"

    string =  """

        {}'s voice has a Laban Effort of {}. {} {} a{} {} who places {} voice in {} {}. {} {} {}, and the air in {} voice has a {} quality. 
        {}{}
        {} voice is {} in size, and {} speak{} at a {} tempo with a {} volume. {} attitude is {}, and {} {} accent can be heard in everything {} say{}. 
        {}{}    
        {}'s vocal issue is {}.""".format(
        

        name,voice['laban_effort'],        
        pronoun['sub'].capitalize(),be,ag_n,voice['gender'],
        pronoun['pos'],pronoun['pos'],voice['placement'],
        pronoun['sub'].capitalize(),be,
        voice['age'],pronoun['pos'],voice['air_quality'],
        br,br,
        pronoun['pos'].capitalize(),voice['size'],pronoun['sub'],s,voice['tempo'],voice['volume'],
        pronoun['pos'].capitalize(),
        voice['attitude'],pronoun['pos'],voice['accent'],pronoun['sub'],s,
        br,br,
        name,voice['vocal_issue']
    )

    return render_template_string(string)