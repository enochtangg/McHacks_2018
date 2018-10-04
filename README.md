# McHacks_2018 Immersify

# Inspiration
Over the past 30 years, the percentage American adults who read literature has dropped about 14%. We found our inspiration. The issue we discovered is that due to the rise of modern technologies, movies and other films are more captivating than reading a boring book. We wanted to change that.

# What it does
By implementing Google’s Mobile Vision API, Firebase, IBM Watson, and Spotify's API, Immersify first scans text through our Android Application by utilizing Google’s Mobile Vision API. After being stored into Firebase, IBM Watson’s Tone Analyzer deduces the emotion of the text. A dominant emotional score is then sent to Spotify’s API where the appropriate music is then played to the user. With Immerisfy, text can finally be brought to life and readers can feel more engaged into their novels.

# How we built it
On the mobile side, the app was developed using Android Studio. The app uses Google’s Mobile Vision API to recognize and detect text captured through the phone’s camera. The text is then uploaded to our Firebase database. On the web side, the application pulls the text sent by the Android app from Firebase. The text is then passed into IBM Watson’s Tone Analyzer API to determine the tone of each individual sentence with the paragraph. We then ran our own algorithm to determine the overall mood of the paragraph based on the different tones of each sentence. A final mood score is generated, and based on this score, specific Spotify playlists will play to match the mood of the text.

# Challenges we ran into
Trying to work with Firebase to cooperate with our mobile app and our web app was difficult for our whole team. Querying the API took multiple attempts as our post request to IBM Watson was out of sync. In addition, the text recognition function in our mobile application did not perform as accurately as we anticipated.

# Accomplishments that we're proud of
Some accomplishments we’re proud of is successfully using Google’s Mobile Vision API and IBM Watson’s API.

# What we learned
We learned how to push information from our mobile application to Firebase and pull it through our web application. We also learned how to use new APIs we never worked with in the past. Aside from the technical aspects, as a team, we learned collaborate together to tackle all the tough challenges we encountered.

# What's next for Immersify
The next step for Immersify is to incorporate this software with Google Glasses. This would eliminate the two step process of having to take a picture on an Android app and going to the web app to generate a playlist.
