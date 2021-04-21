package com.example.charitymatchmaker;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class Charity_filter extends Activity {

    Connection connect;
    String ConnectionResult="";
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
/*
    public void GetTextFromSQL(View v){
        TextView tx1 = (TextView) findViewById(R.id.textView);

        try{
            Connection_db connection = new Connection_db();
            connect = connection.connectionclass();
            if(connect!=null){
                String query = "CharityCateogory";
                Statement st = connect.createStatement();
                ResultSet rs = st.executeQuery(query);

                while (rs.next()){
                    tx1.setText(rs.getString(2));       //# is column number which will be displayed!
                }
            }
            else{
                ConnectionResult="Check Connection";
            }
        }
        catch (Exception e){
            Log.e("Error", e.getMessage());
        }
    }*/
}
