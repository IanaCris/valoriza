import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { classToPlain } from "class-transformer";

class ListUserReceiveComplimentsService {
  async execute (user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return classToPlain(compliments);
  }
}

export { ListUserReceiveComplimentsService };