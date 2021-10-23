const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const ReportComment = function (reportComment) {
   this.commentId = reportComment.commentId;
   this.createdBy = reportComment.createdBy;
};

ReportComment.create = async (newReportComment, result) => {
   try {
      const reportComment = await prismaInstance.reportComment.create({
         data: newReportComment,
      });

      result(null, reportComment);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

ReportComment.findById = async (reportCommentId, result) => {
   try {
      const singleReportComment = await prismaInstance.reportComment.findUnique(
         {
            where: {
               idReportComment: JSON.parse(reportCommentId),
            },
         }
      );

      if (singleReportComment) {
         result(null, singleReportComment);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Report Comment with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

ReportComment.getAll = async (result) => {
   try {
      const reportComments = await prismaInstance.reportComment.findMany();
      result(null, reportComments);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

ReportComment.updateById = async (reportCommentId, reportComment, result) => {
   try {
      const updateReportComment = await prismaInstance.reportComment.update({
         where: { idReportComment: JSON.parse(reportCommentId) },
         data: reportComment,
      });
      result(null, updateReportComment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

ReportComment.remove = async (id, result) => {
   try {
      const deleteReportComment = await prismaInstance.reportComment.delete({
         where: { idReportComment: JSON.parse(id) },
      });
      result(null, deleteReportComment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

ReportComment.removeAll = async (result) => {
   try {
      const deleteAllReportComment =
         await prismaInstance.reportComment.deleteMany({});
      result(null, deleteAllReportComment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = ReportComment;
