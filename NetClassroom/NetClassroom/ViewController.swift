//
//  ViewController.swift
//  NetClassroom
//
//  Created by Tanner Helton on 11/5/17.
//  Copyright © 2017 TWH Technologies. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    @IBOutlet weak var webNet: WKWebView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let myURL = URL(string: "http://netclassroom.rockhursths.edu/")
        let myRequest = URLRequest(url: myURL!)
        webNet.load(myRequest)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

