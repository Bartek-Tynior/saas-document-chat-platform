import { cn } from "@/lib/utils";
import { FC } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    return (
        <div className={cn('flex justify-center', className)} {...props}>

        </div>
    );
}

export default UserAuthForm;