﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine.UI;
using UnityEngine;
using UnityEngine.Events;

using Wowmaking.RNU;

public class Cube : MonoBehaviour
{

    public Text text;
    void appendToText(string line) { text.text += line + "\n"; }

    void Update()
    {
        var touches = Input.touches;
        foreach (var touch in touches)
        {
            switch (touch.phase)
            {
                case TouchPhase.Moved:
                    {
                        var rotation = transform.rotation.eulerAngles;
                        rotation.y += -touch.deltaPosition.x / 2;
                        transform.rotation = Quaternion.Euler(rotation);
                        break;
                    }
            }
        }
        transform.Rotate(0, Time.deltaTime * 10, 0);
    }

    string lastStringColor = "";
    void ChangeColor(string newColor)
    {
        appendToText("Chancing Color to " + newColor);

        lastStringColor = newColor;

        if (newColor == "red") GetComponent<Renderer>().material.color = Color.red;
        else if (newColor == "blue") GetComponent<Renderer>().material.color = Color.blue;
        else if (newColor == "yellow") GetComponent<Renderer>().material.color = Color.yellow;
        else GetComponent<Renderer>().material.color = Color.black;
    }


    void showHostMainWindow(int n)
    {
        Bridge.sendEvent("test", new { number = n, });
    }

    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, 200, 100), "Red")) ChangeColor("red");
        if (GUI.Button(new Rect(10, 110, 200, 100), "Blue")) ChangeColor("blue");
        if (GUI.Button(new Rect(10, 310, 200, 100), "1")) showHostMainWindow(1);
        if (GUI.Button(new Rect(10, 410, 200, 100), "2")) showHostMainWindow(2);
    }
}
