package com.example.charitymatchmaker;

import android.annotation.SuppressLint;
import android.os.StrictMode;
import android.util.Log;

import java.sql.Connection;
import java.sql.DriverManager;

public class Connection_db {
    Connection con;
    String uname, pass, ip, port, database;
    @SuppressLint("NewApi")

    public Connection connectionclass(){
        ip = "69.247.200.43";           //ip running the db
        database = "charity_matchmaker";    //db name
        uname = "hackathon";                //db access user name
        pass = "Apr21";               //db access password
        port = "3306";              //db port

        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);
        Connection connection = null;
        String ConnectionURL = null;

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager
                    .getConnection("jdbc:mysql://"+ip+":"+port+"/"+database+"?"
                            + "user="+uname+"&password="+pass);
            //connection = DriverManager.getConnection(ConnectionURL,uname,pass);
        }
        catch (Exception e){
            Log.e("Error", e.getMessage());
        }
        return connection;
    }

    public static void main(String[] args) {
        Connection_db c = new Connection_db();
        Connection c1 = c.connectionclass();
        if (c1 != null)
        {
            System.out.println("Sccesss");
        }
    }
}
