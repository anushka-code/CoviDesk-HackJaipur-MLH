import 'package:flutter/material.dart';
import 'package:starflut/starflut.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
const  String basic_url = 'https://covidesk.azurewebsites.net';

Future<int> uploadImage(filename) async {
  var request = http.MultipartRequest('POST', Uri.parse(basic_url));
  request.files.add(await http.MultipartFile.fromPath('video', filename));
  var res = await request.send();
  return res.statusCode;
}
class Result extends StatefulWidget {
  final dynamic file;
  Result(this.file);
  @override
  _ResultState createState() => _ResultState();
}

class _ResultState extends State<Result> {
  String hr;
  @override
  Widget build(BuildContext context) {
    hr = uploadImage(widget.file).toString();
    return Container(
      child: Column(
        children: <Widget>[
          Text(hr),
        ],
      ),
    );
  }
}
