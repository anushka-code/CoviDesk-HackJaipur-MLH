import 'package:export_video_frame/export_video_frame.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

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
        onPressed: () { _getImages(); },
      ),
    );
  }
  Future _getImages() async {
    var file = await ImagePicker().getVideo(source: ImageSource.gallery);
    var images = await ExportVideoFrame.exportImage(file.path,10,0);
    var result = images.map((file) => Image.file(file)).toList();
    print(result[0].runtimeType);
    setState(() {
      widget.images.addAll(result);
      _isClean = true;
    });
  }

}
