const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "It always seems impossible until its done. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Opportunities dont happen. You create them. - Chris Grosser",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Doubt kills more dreams than failure ever will. - Suzy Kassem",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The best way to predict the future is to create it. - Peter Drucker",
  "If you're going through hell, keep going. - Winston Churchill",
  "Everything you've ever wanted is on the other side of fear. - George Addair",
  "A winner is just a loser who tried one more time. - George M. Moore Jr.",
  "You only fail when you stop trying. - Unknown",
  "Your limitation—it's only your imagination. - Unknown",
  "Great things never come from comfort zones. - Unknown",
  "Wake up with determination. Go to bed with satisfaction. - Unknown",
  "Do something today that your future self will thank you for. - Sean Patrick Flanery",
  "Its not whether you get knocked down, its whether you get up. - Vince Lombardi",
  "Dont let yesterday take up too much of today. - Will Rogers",
  "You dont have to be great to start, but you have to start to be great. - Zig Ziglar",
  "Dont wait for opportunity. Create it. - Unknown",
  "If not now, when? - Unknown",
  "Little by little, one travels far. - J.R.R. Tolkien",
  "Push yourself, because no one else is going to do it for you. - Unknown",
  "Success doesnt come to you, you go to it. - Marva Collins",
  "You dont have to see the whole staircase, just take the first step. - Martin Luther King Jr.",
  "Your time is limited, so dont waste it living someone elses life. - Steve Jobs",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Courage is resistance to fear, mastery of fear, not absence of fear. - Mark Twain",
  "Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford",
  "Dream big and dare to fail. - Norman Vaughan",
  "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "You miss 100% of the shots you dont take. - Wayne Gretzky",
  "Difficulties in life are intended to make us better, not bitter. - Dan Reeves",
  "One day or day one. You decide. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Every day may not be good, but there is something good in every day. - Unknown",
  "Hustle in silence and let your success make the noise. - Unknown",
  "It is never too late to be what you might have been. - George Eliot",
  "Make your life a masterpiece; imagine no limitations on what you can be, have, or do. - Brian Tracy",
  "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
  "The struggle you're in today is developing the strength you need for tomorrow. - Robert Tew",
  "The man on top of the mountain didnt fall there. - Vince Lombardi",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "Be so good they cant ignore you. - Steve Martin",
  "Dont count the days, make the days count. - Muhammad Ali",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "What defines us is how well we rise after falling. - Zig Ziglar",
  "Work like there is someone working 24 hours a day to take it away from you. - Mark Cuban",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie",
  "If you dont build your dream, someone will hire you to help build theirs. - Tony Gaskins",
  "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
  "The best revenge is massive success. - Frank Sinatra",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. - Earl Nightingale",
  "Discipline is the bridge between goals and accomplishment. - Jim Rohn",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Fall seven times and stand up eight. - Japanese Proverb",
  "The harder the struggle, the more glorious the triumph. - Unknown",
  "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change. - Unknown",
  "A river cuts through rock, not because of its power, but because of its persistence. - Jim Watkins",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "You have to be at your strongest when youre feeling at your weakest. - Unknown",
  "Your passion is waiting for your courage to catch up. - Isabelle Lafleche",
  "Failure is not the opposite of success; its part of success. - Arianna Huffington",
  "Learn as if you will live forever, live like you will die tomorrow. - Mahatma Gandhi",
  "Difficult roads often lead to beautiful destinations. - Unknown",
  "Turn your wounds into wisdom. - Oprah Winfrey",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Happiness depends upon ourselves. - Aristotle",
  "Believe in yourself and all that you are. - Christian D. Larson",
  "You must expect great things of yourself before you can do them. - Michael Jordan",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "No matter how hard times may get, always hold your head up and be strong. - Unknown",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
