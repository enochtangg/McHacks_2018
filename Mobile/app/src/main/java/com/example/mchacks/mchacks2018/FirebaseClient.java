package com.example.mchacks.mchacks2018;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

/**
 * Created by adrianwong on 2018-02-03.
 */

public class FirebaseClient {

    public void sendInfoToDB(String text){
        DatabaseReference mDatabase = FirebaseDatabase.getInstance().getReference();
        mDatabase.child("text").setValue(text);
    }
}
