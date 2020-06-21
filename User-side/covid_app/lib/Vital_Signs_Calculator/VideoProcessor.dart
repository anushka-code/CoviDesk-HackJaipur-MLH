import 'package:export_video_frame/export_video_frame.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:covidapp/Vital_Signs_Calculator/heart_rate.dart';

class VideoProcessor extends StatefulWidget {
  final List<Image> images = [];
  String mg = ' ';

  @override
  _VideoProcessorState createState() => _VideoProcessorState();
}


class _VideoProcessorState extends State<VideoProcessor> {
  var _isClean = false;
  @override
  Widget build(BuildContext context) {

    return Center(
      child : FlatButton(
        color: Colors.white,
        child: Text("Select" , style: TextStyle(color: Colors.black),),
        onPressed: () {
          var file = _getVideo();
          Result(file);
        },
      ),
    );
  }
  Future _getVideo() async {
    var file = await ImagePicker().getVideo(source: ImageSource.gallery);
    return file;
  }

}
