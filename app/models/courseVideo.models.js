const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const CourseVideo = function (courseVideo) {
   this.videoTitle = courseVideo.videoTitle;
   this.videoLink = courseVideo.videoLink;
   this.videoDescription = courseVideo.videoDescription;
   this.courseId = courseVideo.courseId;
   this.createdBy = courseVideo.createdBy;
};

CourseVideo.create = async (newCourseVideo, result) => {
   try {
      const courseVideo = await prismaInstance.courseVideo.create({
         data: newCourseVideo,
      });

      result(null, courseVideo);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseVideo.findById = async (courseVideoId, result) => {
   try {
      const singleCourseVideo = await prismaInstance.courseVideo.findUnique({
         where: {
            idCourseVideo: JSON.parse(courseVideoId),
         },
      });

      if (singleCourseVideo) {
         result(null, singleCourseVideo);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Course Video with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseVideo.getAll = async (result) => {
   try {
      const courseVideos = await prismaInstance.courseVideo.findMany();
      result(null, courseVideos);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseVideo.updateById = async (courseVideoId, courseVideo, result) => {
   try {
      const updateCourseVideo = await prismaInstance.courseVideo.update({
         where: { idCourseVideo: JSON.parse(courseVideoId) },
         data: courseVideo,
      });
      result(null, updateCourseVideo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

CourseVideo.remove = async (id, result) => {
   try {
      const deleteCourseVideo = await prismaInstance.courseVideo.delete({
         where: { idCourseVideo: JSON.parse(id) },
      });
      result(null, deleteCourseVideo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

CourseVideo.removeAll = async (result) => {
   try {
      const deleteAllCourseVideos = await prismaInstance.courseVideo.deleteMany(
         {}
      );
      result(null, deleteAllCourseVideos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = CourseVideo;
