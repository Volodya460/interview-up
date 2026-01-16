import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: CreateUserDto): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByUsername(username: string): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByEmail(email: string): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findById(id: string): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByVerify(verificationCode: string): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    updateUserVerify(verificationCode: string): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    updateUserVerifyCode(verificationCode: string, email: string): import("../generated/prisma/models").Prisma__UserClient<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("../generated/prisma/enums").Role;
        username: string;
        email: string;
        password: string;
        country: string;
        verificationCode: string | null;
        hashed_rt: string | null;
        verify: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
