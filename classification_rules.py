#input: converted text from speech; output: tag, collected_data
def classify(phrase):

    category = 'others'
    data = []

    food_or_drinks_keywords = ['hungry', 'food', 'drink',
                               'thirsty', 'eating', 'eat', 'drinking', 'craving']
    transport_keywords = ['fetch', 'uber',
                          'taxi', 'bus', 'appointment', 'get to']
    medical_keywords = ['medicine', 'pain', 'hurt', 'paracetamol',
                        'doctor', 'pharmacy', 'nurse', 'medical examination']
    entertainment_keywords = ['fun', 'play', 'game', 'joke']
    emotion_keywords = ['happy', 'sad', 'angry',
                        'frustrated', 'cry', 'emotional', 'depressed']

    if any(i in phrase for i in food_or_drinks_keywords):
        category = 'buy_food_or_drink'

    elif any(i in phrase for i in transport_keywords):
        category = 'transport'

    elif any(i in phrase for i in entertainment_keywords):
        category = 'entertainment'

    elif any(i in phrase for i in emotion_keywords):
        category = 'emotion'

    elif any(i in phrase for i in medical_keywords):
        category = 'medical'

    if (category == 'others'):
        data.append(phrase)

    return category, data


tag = classify(phrase)[0]
collected_data = classify(phrase)[1]


