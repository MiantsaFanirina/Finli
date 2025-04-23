import {useQuery} from "@tanstack/react-query";
import {UserType} from "@/features/user/user.type";
import {getUserById} from "@/features/user/user.service";

export const useUserById = (userId: number) => {
    return useQuery({
       queryKey: ["User", "fetchUser"],
       queryFn: async () => {
           const user = await getUserById(userId);
           return user as UserType;
       }
    });
};