const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Status = function (status) {
   this.statusName = status.statusName;
};

Status.create = async (newStatus, result) => {
   try {
      const status = await prismaInstance.status.create({
         data: newStatus,
      });

      result(null, status);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Status.findById = async (statusId, result) => {
   try {
      const singleStatus = await prismaInstance.status.findUnique({
         where: {
            idStatus: JSON.parse(statusId),
         },
      });

      if (singleStatus) {
         result(null, singleStatus);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Status with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Status.getAll = async (result) => {
   try {
      const statuss = await prismaInstance.status.findMany();
      result(null, statuss);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Status.updateById = async (statusId, status, result) => {
   try {
      const updateStatus = await prismaInstance.status.update({
         where: { idStatus: JSON.parse(statusId) },
         data: status,
      });
      result(null, updateStatus);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Status.remove = async (id, result) => {
   try {
      const deleteStatus = await prismaInstance.status.delete({
         where: { idStatus: JSON.parse(id) },
      });
      result(null, deleteStatus);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Status.removeAll = async (result) => {
   try {
      const deleteAllStatus = await prismaInstance.status.deleteMany({});
      result(null, deleteAllStatus);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Status;
