package com.example.charitymatchmaker;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class MainActivity extends Activity {

    Connection connect;
    String ConnectionResult = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //System.out.println("Hello1");
        setContentView(R.layout.charity_filter);
    }
    public void GetTextFromSQL(View v){
        System.out.println("Hello");
        Button button = (Button) findViewById(R.id.button2);

/*        View.OnClickListener onClickListener = new View.OnClickListener() {

            @Override
            public void onClick(View v) {
*/
                TextView tx1 = (TextView) findViewById(R.id.textView);
                try{
                    Connection_db connection = new Connection_db();
                    connect = connection.connectionclass();
                    if(connect!=null){
                        //String query = "SELECT * FROM CATEGORY";
                        System.out.println("sshjdhfjs");
                        Statement st = connect.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
                        ResultSet rs = st.executeQuery("SELECT * FROM category");
                        String a = "";
                        while (rs.next()){
                            a = a + " " + rs.getString(1);       //# is column number which will be displayed!
                        }
                        tx1.setText(a);
                    }
                    else{
                        ConnectionResult="Check Connection";
                    }
                }
                catch (Exception e){
                    System.out.println(e);
                }

    }
}