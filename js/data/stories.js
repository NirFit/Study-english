// Story data with per-word Hebrew translations
// Each word has: word (as displayed), base (lemma), translation (Hebrew, contextual), pos (part of speech)

export const stories = [
  // ===== LEVEL 1 =====
  {
    id: 'the-red-cat',
    title: 'The Red Cat',
    level: 1,
    paragraphs: [
      {
        text: 'Tom has a cat. The cat is red. The cat likes to sleep on the bed.',
        words: [
          { word: 'Tom', base: 'tom', translation: 'טום', pos: 'noun' },
          { word: 'has', base: 'have', translation: 'יש לו', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'cat.', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'is', base: 'be', translation: 'הוא', pos: 'verb' },
          { word: 'red.', base: 'red', translation: 'אדום', pos: 'adjective' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'likes', base: 'like', translation: 'אוהב', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'sleep', base: 'sleep', translation: 'לישון', pos: 'verb' },
          { word: 'on', base: 'on', translation: 'על', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'bed.', base: 'bed', translation: 'מיטה', pos: 'noun' }
        ]
      },
      {
        text: 'Tom gives the cat food and water every day. The cat is happy.',
        words: [
          { word: 'Tom', base: 'tom', translation: 'טום', pos: 'noun' },
          { word: 'gives', base: 'give', translation: 'נותן', pos: 'verb' },
          { word: 'the', base: 'the', translation: 'ל', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'food', base: 'food', translation: 'אוכל', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'water', base: 'water', translation: 'מים', pos: 'noun' },
          { word: 'every', base: 'every', translation: 'כל', pos: 'adjective' },
          { word: 'day.', base: 'day', translation: 'יום', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'is', base: 'be', translation: 'הוא', pos: 'verb' },
          { word: 'happy.', base: 'happy', translation: 'שמח', pos: 'adjective' }
        ]
      },
      {
        text: 'One day the cat goes outside. It sees a bird in the tree. The cat wants to catch the bird but it is too high.',
        words: [
          { word: 'One', base: 'one', translation: 'אחד', pos: 'adjective' },
          { word: 'day', base: 'day', translation: 'יום', pos: 'noun' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'goes', base: 'go', translation: 'הולך', pos: 'verb' },
          { word: 'outside.', base: 'outside', translation: 'החוצה', pos: 'adverb' },
          { word: 'It', base: 'it', translation: 'הוא', pos: 'pronoun' },
          { word: 'sees', base: 'see', translation: 'רואה', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'bird', base: 'bird', translation: 'ציפור', pos: 'noun' },
          { word: 'in', base: 'in', translation: 'על', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'tree.', base: 'tree', translation: 'עץ', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'wants', base: 'want', translation: 'רוצה', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'catch', base: 'catch', translation: 'לתפוס', pos: 'verb' },
          { word: 'the', base: 'the', translation: 'את ה', pos: 'article' },
          { word: 'bird', base: 'bird', translation: 'ציפור', pos: 'noun' },
          { word: 'but', base: 'but', translation: 'אבל', pos: 'conjunction' },
          { word: 'it', base: 'it', translation: 'זה', pos: 'pronoun' },
          { word: 'is', base: 'be', translation: '', pos: 'verb' },
          { word: 'too', base: 'too', translation: 'מדי', pos: 'adverb' },
          { word: 'high.', base: 'high', translation: 'גבוה', pos: 'adjective' }
        ]
      },
      {
        text: 'The cat comes back home. It sleeps on the bed again. Tom smiles.',
        words: [
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'cat', base: 'cat', translation: 'חתול', pos: 'noun' },
          { word: 'comes', base: 'come', translation: 'חוזר', pos: 'verb' },
          { word: 'back', base: 'back', translation: 'בחזרה', pos: 'adverb' },
          { word: 'home.', base: 'home', translation: 'הביתה', pos: 'noun' },
          { word: 'It', base: 'it', translation: 'הוא', pos: 'pronoun' },
          { word: 'sleeps', base: 'sleep', translation: 'ישן', pos: 'verb' },
          { word: 'on', base: 'on', translation: 'על', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'bed', base: 'bed', translation: 'מיטה', pos: 'noun' },
          { word: 'again.', base: 'again', translation: 'שוב', pos: 'adverb' },
          { word: 'Tom', base: 'tom', translation: 'טום', pos: 'noun' },
          { word: 'smiles.', base: 'smile', translation: 'מחייך', pos: 'verb' }
        ]
      }
    ]
  },
  {
    id: 'my-family',
    title: 'My Family',
    level: 1,
    paragraphs: [
      {
        text: 'My name is Sara. I have a big family. I have a mother and a father.',
        words: [
          { word: 'My', base: 'my', translation: 'שלי', pos: 'pronoun' },
          { word: 'name', base: 'name', translation: 'שם', pos: 'noun' },
          { word: 'is', base: 'be', translation: 'הוא', pos: 'verb' },
          { word: 'Sara.', base: 'sara', translation: 'שרה', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'have', base: 'have', translation: 'יש לי', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'big', base: 'big', translation: 'גדולה', pos: 'adjective' },
          { word: 'family.', base: 'family', translation: 'משפחה', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'have', base: 'have', translation: 'יש לי', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'mother', base: 'mother', translation: 'אמא', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'father.', base: 'father', translation: 'אבא', pos: 'noun' }
        ]
      },
      {
        text: 'I have two brothers and one sister. My brothers like to play outside. My sister likes to read books.',
        words: [
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'have', base: 'have', translation: 'יש לי', pos: 'verb' },
          { word: 'two', base: 'two', translation: 'שני', pos: 'adjective' },
          { word: 'brothers', base: 'brother', translation: 'אחים', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'one', base: 'one', translation: 'אחת', pos: 'adjective' },
          { word: 'sister.', base: 'sister', translation: 'אחות', pos: 'noun' },
          { word: 'My', base: 'my', translation: 'שלי', pos: 'pronoun' },
          { word: 'brothers', base: 'brother', translation: 'אחים', pos: 'noun' },
          { word: 'like', base: 'like', translation: 'אוהבים', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'play', base: 'play', translation: 'לשחק', pos: 'verb' },
          { word: 'outside.', base: 'outside', translation: 'בחוץ', pos: 'adverb' },
          { word: 'My', base: 'my', translation: 'שלי', pos: 'pronoun' },
          { word: 'sister', base: 'sister', translation: 'אחות', pos: 'noun' },
          { word: 'likes', base: 'like', translation: 'אוהבת', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'read', base: 'read', translation: 'לקרוא', pos: 'verb' },
          { word: 'books.', base: 'book', translation: 'ספרים', pos: 'noun' }
        ]
      },
      {
        text: 'We eat dinner together every day. We talk and laugh. I love my family very much.',
        words: [
          { word: 'We', base: 'we', translation: 'אנחנו', pos: 'pronoun' },
          { word: 'eat', base: 'eat', translation: 'אוכלים', pos: 'verb' },
          { word: 'dinner', base: 'dinner', translation: 'ארוחת ערב', pos: 'noun' },
          { word: 'together', base: 'together', translation: 'ביחד', pos: 'adverb' },
          { word: 'every', base: 'every', translation: 'כל', pos: 'adjective' },
          { word: 'day.', base: 'day', translation: 'יום', pos: 'noun' },
          { word: 'We', base: 'we', translation: 'אנחנו', pos: 'pronoun' },
          { word: 'talk', base: 'talk', translation: 'מדברים', pos: 'verb' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'laugh.', base: 'laugh', translation: 'צוחקים', pos: 'verb' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'love', base: 'love', translation: 'אוהב', pos: 'verb' },
          { word: 'my', base: 'my', translation: 'את', pos: 'pronoun' },
          { word: 'family', base: 'family', translation: 'המשפחה שלי', pos: 'noun' },
          { word: 'very', base: 'very', translation: 'מאוד', pos: 'adverb' },
          { word: 'much.', base: 'much', translation: '', pos: 'adverb' }
        ]
      }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 'the-lost-key',
    title: 'The Lost Key',
    level: 2,
    paragraphs: [
      {
        text: 'Yesterday Tom lost his key. He looked everywhere in the house but could not find it.',
        words: [
          { word: 'Yesterday', base: 'yesterday', translation: 'אתמול', pos: 'adverb' },
          { word: 'Tom', base: 'tom', translation: 'טום', pos: 'noun' },
          { word: 'lost', base: 'lose', translation: 'איבד', pos: 'verb' },
          { word: 'his', base: 'his', translation: 'שלו', pos: 'pronoun' },
          { word: 'key.', base: 'key', translation: 'מפתח', pos: 'noun' },
          { word: 'He', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'looked', base: 'look', translation: 'חיפש', pos: 'verb' },
          { word: 'everywhere', base: 'everywhere', translation: 'בכל מקום', pos: 'adverb' },
          { word: 'in', base: 'in', translation: 'ב', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'house', base: 'house', translation: 'בית', pos: 'noun' },
          { word: 'but', base: 'but', translation: 'אבל', pos: 'conjunction' },
          { word: 'could', base: 'can', translation: 'יכול', pos: 'verb' },
          { word: 'not', base: 'not', translation: 'לא', pos: 'adverb' },
          { word: 'find', base: 'find', translation: 'למצוא', pos: 'verb' },
          { word: 'it.', base: 'it', translation: 'אותו', pos: 'pronoun' }
        ]
      },
      {
        text: 'He checked under the table and behind the sofa. He opened all the drawers. The key was not there.',
        words: [
          { word: 'He', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'checked', base: 'check', translation: 'בדק', pos: 'verb' },
          { word: 'under', base: 'under', translation: 'מתחת ל', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'table', base: 'table', translation: 'שולחן', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'behind', base: 'behind', translation: 'מאחורי', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'sofa.', base: 'sofa', translation: 'ספה', pos: 'noun' },
          { word: 'He', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'opened', base: 'open', translation: 'פתח', pos: 'verb' },
          { word: 'all', base: 'all', translation: 'את כל', pos: 'adjective' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'drawers.', base: 'drawer', translation: 'מגירות', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'key', base: 'key', translation: 'מפתח', pos: 'noun' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'not', base: 'not', translation: 'לא', pos: 'adverb' },
          { word: 'there.', base: 'there', translation: 'שם', pos: 'adverb' }
        ]
      },
      {
        text: 'Then he remembered something. He put his hand in his jacket pocket. The key was there! He smiled and felt very happy.',
        words: [
          { word: 'Then', base: 'then', translation: 'אז', pos: 'adverb' },
          { word: 'he', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'remembered', base: 'remember', translation: 'נזכר', pos: 'verb' },
          { word: 'something.', base: 'something', translation: 'משהו', pos: 'pronoun' },
          { word: 'He', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'put', base: 'put', translation: 'שם', pos: 'verb' },
          { word: 'his', base: 'his', translation: 'את', pos: 'pronoun' },
          { word: 'hand', base: 'hand', translation: 'יד', pos: 'noun' },
          { word: 'in', base: 'in', translation: 'ב', pos: 'preposition' },
          { word: 'his', base: 'his', translation: '', pos: 'pronoun' },
          { word: 'jacket', base: 'jacket', translation: 'ז\'קט', pos: 'noun' },
          { word: 'pocket.', base: 'pocket', translation: 'כיס', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'key', base: 'key', translation: 'מפתח', pos: 'noun' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'there!', base: 'there', translation: 'שם', pos: 'adverb' },
          { word: 'He', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'smiled', base: 'smile', translation: 'חייך', pos: 'verb' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'felt', base: 'feel', translation: 'הרגיש', pos: 'verb' },
          { word: 'very', base: 'very', translation: 'מאוד', pos: 'adverb' },
          { word: 'happy.', base: 'happy', translation: 'שמח', pos: 'adjective' }
        ]
      }
    ]
  },
  {
    id: 'at-the-store',
    title: 'At the Store',
    level: 2,
    paragraphs: [
      {
        text: 'Lisa went to the store to buy food. She needed milk, bread, and eggs.',
        words: [
          { word: 'Lisa', base: 'lisa', translation: 'ליסה', pos: 'noun' },
          { word: 'went', base: 'go', translation: 'הלכה', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'store', base: 'store', translation: 'חנות', pos: 'noun' },
          { word: 'to', base: 'to', translation: 'כדי ל', pos: 'preposition' },
          { word: 'buy', base: 'buy', translation: 'לקנות', pos: 'verb' },
          { word: 'food.', base: 'food', translation: 'אוכל', pos: 'noun' },
          { word: 'She', base: 'she', translation: 'היא', pos: 'pronoun' },
          { word: 'needed', base: 'need', translation: 'הצטרכה', pos: 'verb' },
          { word: 'milk,', base: 'milk', translation: 'חלב', pos: 'noun' },
          { word: 'bread,', base: 'bread', translation: 'לחם', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'eggs.', base: 'egg', translation: 'ביצים', pos: 'noun' }
        ]
      },
      {
        text: 'At the store she also found some beautiful flowers. She decided to buy them for her mother.',
        words: [
          { word: 'At', base: 'at', translation: 'ב', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'store', base: 'store', translation: 'חנות', pos: 'noun' },
          { word: 'she', base: 'she', translation: 'היא', pos: 'pronoun' },
          { word: 'also', base: 'also', translation: 'גם', pos: 'adverb' },
          { word: 'found', base: 'find', translation: 'מצאה', pos: 'verb' },
          { word: 'some', base: 'some', translation: 'כמה', pos: 'adjective' },
          { word: 'beautiful', base: 'beautiful', translation: 'יפים', pos: 'adjective' },
          { word: 'flowers.', base: 'flower', translation: 'פרחים', pos: 'noun' },
          { word: 'She', base: 'she', translation: 'היא', pos: 'pronoun' },
          { word: 'decided', base: 'decide', translation: 'החליטה', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'buy', base: 'buy', translation: 'לקנות', pos: 'verb' },
          { word: 'them', base: 'them', translation: 'אותם', pos: 'pronoun' },
          { word: 'for', base: 'for', translation: 'עבור', pos: 'preposition' },
          { word: 'her', base: 'her', translation: 'שלה', pos: 'pronoun' },
          { word: 'mother.', base: 'mother', translation: 'אמא', pos: 'noun' }
        ]
      },
      {
        text: 'She paid for everything and walked home. Her mother was very surprised and gave her a big hug.',
        words: [
          { word: 'She', base: 'she', translation: 'היא', pos: 'pronoun' },
          { word: 'paid', base: 'pay', translation: 'שילמה', pos: 'verb' },
          { word: 'for', base: 'for', translation: 'עבור', pos: 'preposition' },
          { word: 'everything', base: 'everything', translation: 'הכל', pos: 'pronoun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'walked', base: 'walk', translation: 'הלכה', pos: 'verb' },
          { word: 'home.', base: 'home', translation: 'הביתה', pos: 'noun' },
          { word: 'Her', base: 'her', translation: 'שלה', pos: 'pronoun' },
          { word: 'mother', base: 'mother', translation: 'אמא', pos: 'noun' },
          { word: 'was', base: 'be', translation: 'הייתה', pos: 'verb' },
          { word: 'very', base: 'very', translation: 'מאוד', pos: 'adverb' },
          { word: 'surprised', base: 'surprise', translation: 'מופתעת', pos: 'adjective' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'gave', base: 'give', translation: 'נתנה', pos: 'verb' },
          { word: 'her', base: 'her', translation: 'לה', pos: 'pronoun' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'big', base: 'big', translation: 'גדול', pos: 'adjective' },
          { word: 'hug.', base: 'hug', translation: 'חיבוק', pos: 'noun' }
        ]
      }
    ]
  },

  // ===== LEVEL 3 =====
  {
    id: 'the-new-neighbor',
    title: 'The New Neighbor',
    level: 3,
    paragraphs: [
      {
        text: 'A new family moved into the house next door last week. They came from a different city far away.',
        words: [
          { word: 'A', base: 'a', translation: '', pos: 'article' },
          { word: 'new', base: 'new', translation: 'חדשה', pos: 'adjective' },
          { word: 'family', base: 'family', translation: 'משפחה', pos: 'noun' },
          { word: 'moved', base: 'move', translation: 'עברה', pos: 'verb' },
          { word: 'into', base: 'into', translation: 'לתוך', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'house', base: 'house', translation: 'בית', pos: 'noun' },
          { word: 'next', base: 'next', translation: 'הבא', pos: 'adjective' },
          { word: 'door', base: 'door', translation: 'דלת', pos: 'noun' },
          { word: 'last', base: 'last', translation: 'שעבר', pos: 'adjective' },
          { word: 'week.', base: 'week', translation: 'שבוע', pos: 'noun' },
          { word: 'They', base: 'they', translation: 'הם', pos: 'pronoun' },
          { word: 'came', base: 'come', translation: 'הגיעו', pos: 'verb' },
          { word: 'from', base: 'from', translation: 'מ', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'different', base: 'different', translation: 'אחרת', pos: 'adjective' },
          { word: 'city', base: 'city', translation: 'עיר', pos: 'noun' },
          { word: 'far', base: 'far', translation: 'רחוקה', pos: 'adjective' },
          { word: 'away.', base: 'away', translation: 'מכאן', pos: 'adverb' }
        ]
      },
      {
        text: 'I was curious about them so I baked a cake and went to say hello. The mother opened the door and smiled warmly.',
        words: [
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'was', base: 'be', translation: 'הייתי', pos: 'verb' },
          { word: 'curious', base: 'curious', translation: 'סקרנית', pos: 'adjective' },
          { word: 'about', base: 'about', translation: 'לגבי', pos: 'preposition' },
          { word: 'them', base: 'them', translation: 'שלהם', pos: 'pronoun' },
          { word: 'so', base: 'so', translation: 'אז', pos: 'conjunction' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'baked', base: 'bake', translation: 'אפיתי', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'cake', base: 'cake', translation: 'עוגה', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'went', base: 'go', translation: 'הלכתי', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'say', base: 'say', translation: 'להגיד', pos: 'verb' },
          { word: 'hello.', base: 'hello', translation: 'שלום', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'mother', base: 'mother', translation: 'אמא', pos: 'noun' },
          { word: 'opened', base: 'open', translation: 'פתחה', pos: 'verb' },
          { word: 'the', base: 'the', translation: 'את ה', pos: 'article' },
          { word: 'door', base: 'door', translation: 'דלת', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'smiled', base: 'smile', translation: 'חייכה', pos: 'verb' },
          { word: 'warmly.', base: 'warmly', translation: 'בחמימות', pos: 'adverb' }
        ]
      },
      {
        text: 'We talked for a long time and I learned that they have a son my age. His name is David and he likes soccer just like me. I think we will become good friends.',
        words: [
          { word: 'We', base: 'we', translation: 'אנחנו', pos: 'pronoun' },
          { word: 'talked', base: 'talk', translation: 'דיברנו', pos: 'verb' },
          { word: 'for', base: 'for', translation: 'במשך', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'long', base: 'long', translation: 'ארוך', pos: 'adjective' },
          { word: 'time', base: 'time', translation: 'זמן', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'learned', base: 'learn', translation: 'למדתי', pos: 'verb' },
          { word: 'that', base: 'that', translation: 'ש', pos: 'conjunction' },
          { word: 'they', base: 'they', translation: 'יש להם', pos: 'pronoun' },
          { word: 'have', base: 'have', translation: '', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'son', base: 'son', translation: 'בן', pos: 'noun' },
          { word: 'my', base: 'my', translation: 'בגיל שלי', pos: 'pronoun' },
          { word: 'age.', base: 'age', translation: '', pos: 'noun' },
          { word: 'His', base: 'his', translation: 'שלו', pos: 'pronoun' },
          { word: 'name', base: 'name', translation: 'שם', pos: 'noun' },
          { word: 'is', base: 'be', translation: 'הוא', pos: 'verb' },
          { word: 'David', base: 'david', translation: 'דוד', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'he', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'likes', base: 'like', translation: 'אוהב', pos: 'verb' },
          { word: 'soccer', base: 'soccer', translation: 'כדורגל', pos: 'noun' },
          { word: 'just', base: 'just', translation: 'בדיוק', pos: 'adverb' },
          { word: 'like', base: 'like', translation: 'כמו', pos: 'preposition' },
          { word: 'me.', base: 'me', translation: 'אותי', pos: 'pronoun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'think', base: 'think', translation: 'חושב', pos: 'verb' },
          { word: 'we', base: 'we', translation: 'אנחנו', pos: 'pronoun' },
          { word: 'will', base: 'will', translation: 'נ', pos: 'verb' },
          { word: 'become', base: 'become', translation: 'הפוך ל', pos: 'verb' },
          { word: 'good', base: 'good', translation: 'טובים', pos: 'adjective' },
          { word: 'friends.', base: 'friend', translation: 'חברים', pos: 'noun' }
        ]
      }
    ]
  },
  {
    id: 'rainy-day',
    title: 'A Rainy Day',
    level: 3,
    paragraphs: [
      {
        text: 'It was raining heavily outside. I looked through the window and watched the drops fall on the street.',
        words: [
          { word: 'It', base: 'it', translation: 'זה', pos: 'pronoun' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'raining', base: 'rain', translation: 'גשום', pos: 'verb' },
          { word: 'heavily', base: 'heavily', translation: 'בכבדות', pos: 'adverb' },
          { word: 'outside.', base: 'outside', translation: 'בחוץ', pos: 'adverb' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'looked', base: 'look', translation: 'הסתכלתי', pos: 'verb' },
          { word: 'through', base: 'through', translation: 'דרך', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'window', base: 'window', translation: 'חלון', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'watched', base: 'watch', translation: 'צפיתי', pos: 'verb' },
          { word: 'the', base: 'the', translation: 'ב', pos: 'article' },
          { word: 'drops', base: 'drop', translation: 'טיפות', pos: 'noun' },
          { word: 'fall', base: 'fall', translation: 'נופלות', pos: 'verb' },
          { word: 'on', base: 'on', translation: 'על', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'street.', base: 'street', translation: 'רחוב', pos: 'noun' }
        ]
      },
      {
        text: 'I decided to make hot chocolate and read a book. I felt warm and comfortable inside my house.',
        words: [
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'decided', base: 'decide', translation: 'החלטתי', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'make', base: 'make', translation: 'להכין', pos: 'verb' },
          { word: 'hot', base: 'hot', translation: 'חם', pos: 'adjective' },
          { word: 'chocolate', base: 'chocolate', translation: 'שוקולד', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'read', base: 'read', translation: 'לקרוא', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'book.', base: 'book', translation: 'ספר', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'felt', base: 'feel', translation: 'הרגשתי', pos: 'verb' },
          { word: 'warm', base: 'warm', translation: 'חמים', pos: 'adjective' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'comfortable', base: 'comfortable', translation: 'נוח', pos: 'adjective' },
          { word: 'inside', base: 'inside', translation: 'בתוך', pos: 'preposition' },
          { word: 'my', base: 'my', translation: 'שלי', pos: 'pronoun' },
          { word: 'house.', base: 'house', translation: 'הבית', pos: 'noun' }
        ]
      },
      {
        text: 'When the rain stopped a beautiful rainbow appeared in the sky. Sometimes bad weather brings something wonderful.',
        words: [
          { word: 'When', base: 'when', translation: 'כש', pos: 'conjunction' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'rain', base: 'rain', translation: 'גשם', pos: 'noun' },
          { word: 'stopped', base: 'stop', translation: 'הפסיק', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'beautiful', base: 'beautiful', translation: 'יפה', pos: 'adjective' },
          { word: 'rainbow', base: 'rainbow', translation: 'קשת בענן', pos: 'noun' },
          { word: 'appeared', base: 'appear', translation: 'הופיעה', pos: 'verb' },
          { word: 'in', base: 'in', translation: 'ב', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'sky.', base: 'sky', translation: 'שמיים', pos: 'noun' },
          { word: 'Sometimes', base: 'sometimes', translation: 'לפעמים', pos: 'adverb' },
          { word: 'bad', base: 'bad', translation: 'רע', pos: 'adjective' },
          { word: 'weather', base: 'weather', translation: 'מזג אוויר', pos: 'noun' },
          { word: 'brings', base: 'bring', translation: 'מביא', pos: 'verb' },
          { word: 'something', base: 'something', translation: 'משהו', pos: 'pronoun' },
          { word: 'wonderful.', base: 'wonderful', translation: 'נפלא', pos: 'adjective' }
        ]
      }
    ]
  },

  // ===== LEVEL 4 =====
  {
    id: 'the-old-bookshop',
    title: 'The Old Bookshop',
    level: 4,
    paragraphs: [
      {
        text: 'There was an old bookshop at the corner of Main Street that most people walked past without noticing. The paint on its wooden door was peeling and the sign above it had faded over the years.',
        words: [
          { word: 'There', base: 'there', translation: 'שם', pos: 'adverb' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'an', base: 'a', translation: '', pos: 'article' },
          { word: 'old', base: 'old', translation: 'ישנה', pos: 'adjective' },
          { word: 'bookshop', base: 'bookshop', translation: 'חנות ספרים', pos: 'noun' },
          { word: 'at', base: 'at', translation: 'ב', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'corner', base: 'corner', translation: 'פינה', pos: 'noun' },
          { word: 'of', base: 'of', translation: 'של', pos: 'preposition' },
          { word: 'Main', base: 'main', translation: 'ראשי', pos: 'adjective' },
          { word: 'Street', base: 'street', translation: 'רחוב', pos: 'noun' },
          { word: 'that', base: 'that', translation: 'ש', pos: 'conjunction' },
          { word: 'most', base: 'most', translation: 'רוב', pos: 'adjective' },
          { word: 'people', base: 'people', translation: 'האנשים', pos: 'noun' },
          { word: 'walked', base: 'walk', translation: 'עברו', pos: 'verb' },
          { word: 'past', base: 'past', translation: 'ליד', pos: 'preposition' },
          { word: 'without', base: 'without', translation: 'בלי', pos: 'preposition' },
          { word: 'noticing.', base: 'notice', translation: 'לשים לב', pos: 'verb' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'paint', base: 'paint', translation: 'צבע', pos: 'noun' },
          { word: 'on', base: 'on', translation: 'על', pos: 'preposition' },
          { word: 'its', base: 'its', translation: 'שלה', pos: 'pronoun' },
          { word: 'wooden', base: 'wooden', translation: 'עץ', pos: 'adjective' },
          { word: 'door', base: 'door', translation: 'דלת', pos: 'noun' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'peeling', base: 'peel', translation: 'מתקלף', pos: 'verb' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'sign', base: 'sign', translation: 'שלט', pos: 'noun' },
          { word: 'above', base: 'above', translation: 'מעל', pos: 'preposition' },
          { word: 'it', base: 'it', translation: 'לו', pos: 'pronoun' },
          { word: 'had', base: 'have', translation: 'כבר', pos: 'verb' },
          { word: 'faded', base: 'fade', translation: 'דהה', pos: 'verb' },
          { word: 'over', base: 'over', translation: 'לאורך', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'years.', base: 'year', translation: 'שנים', pos: 'noun' }
        ]
      },
      {
        text: 'But inside it was magical. Thousands of books lined the shelves from floor to ceiling. The owner was a kind elderly man named Mr. Green who knew every single book in his shop.',
        words: [
          { word: 'But', base: 'but', translation: 'אבל', pos: 'conjunction' },
          { word: 'inside', base: 'inside', translation: 'מבפנים', pos: 'adverb' },
          { word: 'it', base: 'it', translation: 'זה', pos: 'pronoun' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'magical.', base: 'magical', translation: 'קסום', pos: 'adjective' },
          { word: 'Thousands', base: 'thousand', translation: 'אלפי', pos: 'noun' },
          { word: 'of', base: 'of', translation: '', pos: 'preposition' },
          { word: 'books', base: 'book', translation: 'ספרים', pos: 'noun' },
          { word: 'lined', base: 'line', translation: 'מילאו', pos: 'verb' },
          { word: 'the', base: 'the', translation: 'את ה', pos: 'article' },
          { word: 'shelves', base: 'shelf', translation: 'מדפים', pos: 'noun' },
          { word: 'from', base: 'from', translation: 'מ', pos: 'preposition' },
          { word: 'floor', base: 'floor', translation: 'הרצפה', pos: 'noun' },
          { word: 'to', base: 'to', translation: 'עד', pos: 'preposition' },
          { word: 'ceiling.', base: 'ceiling', translation: 'התקרה', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'owner', base: 'owner', translation: 'בעלים', pos: 'noun' },
          { word: 'was', base: 'be', translation: 'היה', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'kind', base: 'kind', translation: 'חביב', pos: 'adjective' },
          { word: 'elderly', base: 'elderly', translation: 'מבוגר', pos: 'adjective' },
          { word: 'man', base: 'man', translation: 'איש', pos: 'noun' },
          { word: 'named', base: 'name', translation: 'בשם', pos: 'verb' },
          { word: 'Mr.', base: 'mr', translation: 'מר', pos: 'noun' },
          { word: 'Green', base: 'green', translation: 'גרין', pos: 'noun' },
          { word: 'who', base: 'who', translation: 'ש', pos: 'pronoun' },
          { word: 'knew', base: 'know', translation: 'הכיר', pos: 'verb' },
          { word: 'every', base: 'every', translation: 'כל', pos: 'adjective' },
          { word: 'single', base: 'single', translation: 'אחד', pos: 'adjective' },
          { word: 'book', base: 'book', translation: 'ספר', pos: 'noun' },
          { word: 'in', base: 'in', translation: 'ב', pos: 'preposition' },
          { word: 'his', base: 'his', translation: 'שלו', pos: 'pronoun' },
          { word: 'shop.', base: 'shop', translation: 'חנות', pos: 'noun' }
        ]
      },
      {
        text: 'One afternoon a young girl walked in looking for something special to read. Mr. Green listened carefully to what she liked and then disappeared between the shelves. He returned with a dusty book and said with a smile this one will change your life.',
        words: [
          { word: 'One', base: 'one', translation: 'אחד', pos: 'adjective' },
          { word: 'afternoon', base: 'afternoon', translation: 'אחר הצהריים', pos: 'noun' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'young', base: 'young', translation: 'צעירה', pos: 'adjective' },
          { word: 'girl', base: 'girl', translation: 'ילדה', pos: 'noun' },
          { word: 'walked', base: 'walk', translation: 'נכנסה', pos: 'verb' },
          { word: 'in', base: 'in', translation: 'פנימה', pos: 'adverb' },
          { word: 'looking', base: 'look', translation: 'מחפשת', pos: 'verb' },
          { word: 'for', base: 'for', translation: '', pos: 'preposition' },
          { word: 'something', base: 'something', translation: 'משהו', pos: 'pronoun' },
          { word: 'special', base: 'special', translation: 'מיוחד', pos: 'adjective' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'read.', base: 'read', translation: 'קריאה', pos: 'verb' },
          { word: 'Mr.', base: 'mr', translation: 'מר', pos: 'noun' },
          { word: 'Green', base: 'green', translation: 'גרין', pos: 'noun' },
          { word: 'listened', base: 'listen', translation: 'הקשיב', pos: 'verb' },
          { word: 'carefully', base: 'carefully', translation: 'בקשב', pos: 'adverb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'what', base: 'what', translation: 'מה', pos: 'pronoun' },
          { word: 'she', base: 'she', translation: 'היא', pos: 'pronoun' },
          { word: 'liked', base: 'like', translation: 'אהבה', pos: 'verb' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'then', base: 'then', translation: 'אז', pos: 'adverb' },
          { word: 'disappeared', base: 'disappear', translation: 'נעלם', pos: 'verb' },
          { word: 'between', base: 'between', translation: 'בין', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'shelves.', base: 'shelf', translation: 'מדפים', pos: 'noun' },
          { word: 'He', base: 'he', translation: 'הוא', pos: 'pronoun' },
          { word: 'returned', base: 'return', translation: 'חזר', pos: 'verb' },
          { word: 'with', base: 'with', translation: 'עם', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'dusty', base: 'dusty', translation: 'מאובק', pos: 'adjective' },
          { word: 'book', base: 'book', translation: 'ספר', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'said', base: 'say', translation: 'אמר', pos: 'verb' },
          { word: 'with', base: 'with', translation: 'עם', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'smile', base: 'smile', translation: 'חיוך', pos: 'noun' },
          { word: 'this', base: 'this', translation: 'זה', pos: 'pronoun' },
          { word: 'one', base: 'one', translation: '', pos: 'pronoun' },
          { word: 'will', base: 'will', translation: 'ישנה', pos: 'verb' },
          { word: 'change', base: 'change', translation: '', pos: 'verb' },
          { word: 'your', base: 'your', translation: 'את', pos: 'pronoun' },
          { word: 'life.', base: 'life', translation: 'החיים שלך', pos: 'noun' }
        ]
      }
    ]
  },

  // ===== LEVEL 5 =====
  {
    id: 'the-photograph',
    title: 'The Photograph',
    level: 5,
    paragraphs: [
      {
        text: 'While cleaning the attic last Saturday I discovered an old photograph hidden inside a book that belonged to my grandmother. The picture showed a group of young people standing in front of a building I did not recognize.',
        words: [
          { word: 'While', base: 'while', translation: 'בזמן ש', pos: 'conjunction' },
          { word: 'cleaning', base: 'clean', translation: 'ניקיתי', pos: 'verb' },
          { word: 'the', base: 'the', translation: 'את ה', pos: 'article' },
          { word: 'attic', base: 'attic', translation: 'עליית גג', pos: 'noun' },
          { word: 'last', base: 'last', translation: 'שעבר', pos: 'adjective' },
          { word: 'Saturday', base: 'saturday', translation: 'שבת', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'discovered', base: 'discover', translation: 'גיליתי', pos: 'verb' },
          { word: 'an', base: 'a', translation: '', pos: 'article' },
          { word: 'old', base: 'old', translation: 'ישנה', pos: 'adjective' },
          { word: 'photograph', base: 'photograph', translation: 'תצלום', pos: 'noun' },
          { word: 'hidden', base: 'hide', translation: 'מוסתר', pos: 'verb' },
          { word: 'inside', base: 'inside', translation: 'בתוך', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'book', base: 'book', translation: 'ספר', pos: 'noun' },
          { word: 'that', base: 'that', translation: 'ש', pos: 'conjunction' },
          { word: 'belonged', base: 'belong', translation: 'שייך', pos: 'verb' },
          { word: 'to', base: 'to', translation: 'ל', pos: 'preposition' },
          { word: 'my', base: 'my', translation: 'שלי', pos: 'pronoun' },
          { word: 'grandmother.', base: 'grandmother', translation: 'סבתא', pos: 'noun' },
          { word: 'The', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'picture', base: 'picture', translation: 'תמונה', pos: 'noun' },
          { word: 'showed', base: 'show', translation: 'הראתה', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'group', base: 'group', translation: 'קבוצה', pos: 'noun' },
          { word: 'of', base: 'of', translation: 'של', pos: 'preposition' },
          { word: 'young', base: 'young', translation: 'צעירים', pos: 'adjective' },
          { word: 'people', base: 'people', translation: 'אנשים', pos: 'noun' },
          { word: 'standing', base: 'stand', translation: 'עומדים', pos: 'verb' },
          { word: 'in', base: 'in', translation: 'מול', pos: 'preposition' },
          { word: 'front', base: 'front', translation: '', pos: 'noun' },
          { word: 'of', base: 'of', translation: '', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'building', base: 'building', translation: 'בניין', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'did', base: 'do', translation: '', pos: 'verb' },
          { word: 'not', base: 'not', translation: 'לא', pos: 'adverb' },
          { word: 'recognize.', base: 'recognize', translation: 'זיהיתי', pos: 'verb' }
        ]
      },
      {
        text: 'On the back someone had written a date and a few words in faded ink. I could barely make out the year nineteen fifty-two and something about a promise. I wondered what story this photograph held and what promise had been made all those years ago.',
        words: [
          { word: 'On', base: 'on', translation: 'על', pos: 'preposition' },
          { word: 'the', base: 'the', translation: 'ה', pos: 'article' },
          { word: 'back', base: 'back', translation: 'גב', pos: 'noun' },
          { word: 'someone', base: 'someone', translation: 'מישהו', pos: 'pronoun' },
          { word: 'had', base: 'have', translation: '', pos: 'verb' },
          { word: 'written', base: 'write', translation: 'כתב', pos: 'verb' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'date', base: 'date', translation: 'תאריך', pos: 'noun' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'few', base: 'few', translation: 'כמה', pos: 'adjective' },
          { word: 'words', base: 'word', translation: 'מילים', pos: 'noun' },
          { word: 'in', base: 'in', translation: 'ב', pos: 'preposition' },
          { word: 'faded', base: 'fade', translation: 'דהוי', pos: 'adjective' },
          { word: 'ink.', base: 'ink', translation: 'דיו', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'could', base: 'can', translation: 'יכולתי', pos: 'verb' },
          { word: 'barely', base: 'barely', translation: 'בקושי', pos: 'adverb' },
          { word: 'make', base: 'make', translation: 'לפענח', pos: 'verb' },
          { word: 'out', base: 'out', translation: '', pos: 'adverb' },
          { word: 'the', base: 'the', translation: 'את ה', pos: 'article' },
          { word: 'year', base: 'year', translation: 'שנת', pos: 'noun' },
          { word: 'nineteen', base: 'nineteen', translation: 'תשע עשרה', pos: 'adjective' },
          { word: 'fifty-two', base: 'fifty-two', translation: 'חמישים ושתיים', pos: 'adjective' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'something', base: 'something', translation: 'משהו', pos: 'pronoun' },
          { word: 'about', base: 'about', translation: 'על', pos: 'preposition' },
          { word: 'a', base: 'a', translation: '', pos: 'article' },
          { word: 'promise.', base: 'promise', translation: 'הבטחה', pos: 'noun' },
          { word: 'I', base: 'I', translation: 'אני', pos: 'pronoun' },
          { word: 'wondered', base: 'wonder', translation: 'תהיתי', pos: 'verb' },
          { word: 'what', base: 'what', translation: 'איזה', pos: 'pronoun' },
          { word: 'story', base: 'story', translation: 'סיפור', pos: 'noun' },
          { word: 'this', base: 'this', translation: 'הזאת', pos: 'pronoun' },
          { word: 'photograph', base: 'photograph', translation: 'תצלום', pos: 'noun' },
          { word: 'held', base: 'hold', translation: 'מחזיקה', pos: 'verb' },
          { word: 'and', base: 'and', translation: 'ו', pos: 'conjunction' },
          { word: 'what', base: 'what', translation: 'איזו', pos: 'pronoun' },
          { word: 'promise', base: 'promise', translation: 'הבטחה', pos: 'noun' },
          { word: 'had', base: 'have', translation: '', pos: 'verb' },
          { word: 'been', base: 'be', translation: '', pos: 'verb' },
          { word: 'made', base: 'make', translation: 'ניתנה', pos: 'verb' },
          { word: 'all', base: 'all', translation: 'כל', pos: 'adjective' },
          { word: 'those', base: 'those', translation: 'אותן', pos: 'pronoun' },
          { word: 'years', base: 'year', translation: 'שנים', pos: 'noun' },
          { word: 'ago.', base: 'ago', translation: 'לפני', pos: 'adverb' }
        ]
      }
    ]
  }
];

// Helper: get stories by level
export function getStoriesByLevel(level) {
  return stories.filter(s => s.level === level);
}

// Helper: get story by ID
export function getStoryById(id) {
  return stories.find(s => s.id === id);
}

// Helper: get all words from a story (flat array)
export function getAllWords(story) {
  return story.paragraphs.flatMap(p => p.words);
}

// Helper: get the sentence containing a word (by paragraph and word index)
export function getSentence(paragraph, wordIndex) {
  // Reconstruct the full paragraph text from words
  const words = paragraph.words;
  const fullText = words.map(w => w.word).join(' ');

  // Find sentence boundaries
  const beforeWords = words.slice(0, wordIndex + 1).map(w => w.word).join(' ');
  const sentences = fullText.split(/(?<=[.!?])\s+/);

  let charCount = 0;
  for (const sentence of sentences) {
    charCount += sentence.length + 1;
    if (charCount >= beforeWords.length) {
      return sentence;
    }
  }
  return fullText;
}
