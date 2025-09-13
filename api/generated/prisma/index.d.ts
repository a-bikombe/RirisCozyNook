
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model crew
 * 
 */
export type crew = $Result.DefaultSelection<Prisma.$crewPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model bunny_facts
 * 
 */
export type bunny_facts = $Result.DefaultSelection<Prisma.$bunny_factsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Crews
 * const crews = await prisma.crew.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Crews
   * const crews = await prisma.crew.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.crew`: Exposes CRUD operations for the **crew** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crews
    * const crews = await prisma.crew.findMany()
    * ```
    */
  get crew(): Prisma.crewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bunny_facts`: Exposes CRUD operations for the **bunny_facts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bunny_facts
    * const bunny_facts = await prisma.bunny_facts.findMany()
    * ```
    */
  get bunny_facts(): Prisma.bunny_factsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    crew: 'crew',
    users: 'users',
    bunny_facts: 'bunny_facts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "crew" | "users" | "bunny_facts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      crew: {
        payload: Prisma.$crewPayload<ExtArgs>
        fields: Prisma.crewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.crewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.crewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>
          }
          findFirst: {
            args: Prisma.crewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.crewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>
          }
          findMany: {
            args: Prisma.crewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>[]
          }
          create: {
            args: Prisma.crewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>
          }
          createMany: {
            args: Prisma.crewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.crewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>[]
          }
          delete: {
            args: Prisma.crewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>
          }
          update: {
            args: Prisma.crewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>
          }
          deleteMany: {
            args: Prisma.crewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.crewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.crewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>[]
          }
          upsert: {
            args: Prisma.crewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crewPayload>
          }
          aggregate: {
            args: Prisma.CrewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrew>
          }
          groupBy: {
            args: Prisma.crewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrewGroupByOutputType>[]
          }
          count: {
            args: Prisma.crewCountArgs<ExtArgs>
            result: $Utils.Optional<CrewCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      bunny_facts: {
        payload: Prisma.$bunny_factsPayload<ExtArgs>
        fields: Prisma.bunny_factsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bunny_factsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bunny_factsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>
          }
          findFirst: {
            args: Prisma.bunny_factsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bunny_factsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>
          }
          findMany: {
            args: Prisma.bunny_factsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>[]
          }
          create: {
            args: Prisma.bunny_factsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>
          }
          createMany: {
            args: Prisma.bunny_factsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bunny_factsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>[]
          }
          delete: {
            args: Prisma.bunny_factsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>
          }
          update: {
            args: Prisma.bunny_factsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>
          }
          deleteMany: {
            args: Prisma.bunny_factsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bunny_factsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bunny_factsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>[]
          }
          upsert: {
            args: Prisma.bunny_factsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bunny_factsPayload>
          }
          aggregate: {
            args: Prisma.Bunny_factsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBunny_facts>
          }
          groupBy: {
            args: Prisma.bunny_factsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bunny_factsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bunny_factsCountArgs<ExtArgs>
            result: $Utils.Optional<Bunny_factsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    crew?: crewOmit
    users?: usersOmit
    bunny_facts?: bunny_factsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model crew
   */

  export type AggregateCrew = {
    _count: CrewCountAggregateOutputType | null
    _avg: CrewAvgAggregateOutputType | null
    _sum: CrewSumAggregateOutputType | null
    _min: CrewMinAggregateOutputType | null
    _max: CrewMaxAggregateOutputType | null
  }

  export type CrewAvgAggregateOutputType = {
    id: number | null
  }

  export type CrewSumAggregateOutputType = {
    id: number | null
  }

  export type CrewMinAggregateOutputType = {
    name: string | null
    id: number | null
    relationship: string | null
    description: string | null
    image: string | null
  }

  export type CrewMaxAggregateOutputType = {
    name: string | null
    id: number | null
    relationship: string | null
    description: string | null
    image: string | null
  }

  export type CrewCountAggregateOutputType = {
    name: number
    id: number
    relationship: number
    description: number
    image: number
    _all: number
  }


  export type CrewAvgAggregateInputType = {
    id?: true
  }

  export type CrewSumAggregateInputType = {
    id?: true
  }

  export type CrewMinAggregateInputType = {
    name?: true
    id?: true
    relationship?: true
    description?: true
    image?: true
  }

  export type CrewMaxAggregateInputType = {
    name?: true
    id?: true
    relationship?: true
    description?: true
    image?: true
  }

  export type CrewCountAggregateInputType = {
    name?: true
    id?: true
    relationship?: true
    description?: true
    image?: true
    _all?: true
  }

  export type CrewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crew to aggregate.
     */
    where?: crewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crews to fetch.
     */
    orderBy?: crewOrderByWithRelationInput | crewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: crewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned crews
    **/
    _count?: true | CrewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrewMaxAggregateInputType
  }

  export type GetCrewAggregateType<T extends CrewAggregateArgs> = {
        [P in keyof T & keyof AggregateCrew]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrew[P]>
      : GetScalarType<T[P], AggregateCrew[P]>
  }




  export type crewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: crewWhereInput
    orderBy?: crewOrderByWithAggregationInput | crewOrderByWithAggregationInput[]
    by: CrewScalarFieldEnum[] | CrewScalarFieldEnum
    having?: crewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrewCountAggregateInputType | true
    _avg?: CrewAvgAggregateInputType
    _sum?: CrewSumAggregateInputType
    _min?: CrewMinAggregateInputType
    _max?: CrewMaxAggregateInputType
  }

  export type CrewGroupByOutputType = {
    name: string
    id: number
    relationship: string | null
    description: string | null
    image: string | null
    _count: CrewCountAggregateOutputType | null
    _avg: CrewAvgAggregateOutputType | null
    _sum: CrewSumAggregateOutputType | null
    _min: CrewMinAggregateOutputType | null
    _max: CrewMaxAggregateOutputType | null
  }

  type GetCrewGroupByPayload<T extends crewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrewGroupByOutputType[P]>
            : GetScalarType<T[P], CrewGroupByOutputType[P]>
        }
      >
    >


  export type crewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    relationship?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["crew"]>

  export type crewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    relationship?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["crew"]>

  export type crewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    relationship?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["crew"]>

  export type crewSelectScalar = {
    name?: boolean
    id?: boolean
    relationship?: boolean
    description?: boolean
    image?: boolean
  }

  export type crewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "id" | "relationship" | "description" | "image", ExtArgs["result"]["crew"]>

  export type $crewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "crew"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      id: number
      relationship: string | null
      description: string | null
      image: string | null
    }, ExtArgs["result"]["crew"]>
    composites: {}
  }

  type crewGetPayload<S extends boolean | null | undefined | crewDefaultArgs> = $Result.GetResult<Prisma.$crewPayload, S>

  type crewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<crewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrewCountAggregateInputType | true
    }

  export interface crewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['crew'], meta: { name: 'crew' } }
    /**
     * Find zero or one Crew that matches the filter.
     * @param {crewFindUniqueArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends crewFindUniqueArgs>(args: SelectSubset<T, crewFindUniqueArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crew that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {crewFindUniqueOrThrowArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends crewFindUniqueOrThrowArgs>(args: SelectSubset<T, crewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crew that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crewFindFirstArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends crewFindFirstArgs>(args?: SelectSubset<T, crewFindFirstArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crew that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crewFindFirstOrThrowArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends crewFindFirstOrThrowArgs>(args?: SelectSubset<T, crewFindFirstOrThrowArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crews
     * const crews = await prisma.crew.findMany()
     * 
     * // Get first 10 Crews
     * const crews = await prisma.crew.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const crewWithNameOnly = await prisma.crew.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends crewFindManyArgs>(args?: SelectSubset<T, crewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crew.
     * @param {crewCreateArgs} args - Arguments to create a Crew.
     * @example
     * // Create one Crew
     * const Crew = await prisma.crew.create({
     *   data: {
     *     // ... data to create a Crew
     *   }
     * })
     * 
     */
    create<T extends crewCreateArgs>(args: SelectSubset<T, crewCreateArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crews.
     * @param {crewCreateManyArgs} args - Arguments to create many Crews.
     * @example
     * // Create many Crews
     * const crew = await prisma.crew.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends crewCreateManyArgs>(args?: SelectSubset<T, crewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crews and returns the data saved in the database.
     * @param {crewCreateManyAndReturnArgs} args - Arguments to create many Crews.
     * @example
     * // Create many Crews
     * const crew = await prisma.crew.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crews and only return the `name`
     * const crewWithNameOnly = await prisma.crew.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends crewCreateManyAndReturnArgs>(args?: SelectSubset<T, crewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crew.
     * @param {crewDeleteArgs} args - Arguments to delete one Crew.
     * @example
     * // Delete one Crew
     * const Crew = await prisma.crew.delete({
     *   where: {
     *     // ... filter to delete one Crew
     *   }
     * })
     * 
     */
    delete<T extends crewDeleteArgs>(args: SelectSubset<T, crewDeleteArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crew.
     * @param {crewUpdateArgs} args - Arguments to update one Crew.
     * @example
     * // Update one Crew
     * const crew = await prisma.crew.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends crewUpdateArgs>(args: SelectSubset<T, crewUpdateArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crews.
     * @param {crewDeleteManyArgs} args - Arguments to filter Crews to delete.
     * @example
     * // Delete a few Crews
     * const { count } = await prisma.crew.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends crewDeleteManyArgs>(args?: SelectSubset<T, crewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crews
     * const crew = await prisma.crew.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends crewUpdateManyArgs>(args: SelectSubset<T, crewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crews and returns the data updated in the database.
     * @param {crewUpdateManyAndReturnArgs} args - Arguments to update many Crews.
     * @example
     * // Update many Crews
     * const crew = await prisma.crew.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crews and only return the `name`
     * const crewWithNameOnly = await prisma.crew.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends crewUpdateManyAndReturnArgs>(args: SelectSubset<T, crewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crew.
     * @param {crewUpsertArgs} args - Arguments to update or create a Crew.
     * @example
     * // Update or create a Crew
     * const crew = await prisma.crew.upsert({
     *   create: {
     *     // ... data to create a Crew
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crew we want to update
     *   }
     * })
     */
    upsert<T extends crewUpsertArgs>(args: SelectSubset<T, crewUpsertArgs<ExtArgs>>): Prisma__crewClient<$Result.GetResult<Prisma.$crewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crewCountArgs} args - Arguments to filter Crews to count.
     * @example
     * // Count the number of Crews
     * const count = await prisma.crew.count({
     *   where: {
     *     // ... the filter for the Crews we want to count
     *   }
     * })
    **/
    count<T extends crewCountArgs>(
      args?: Subset<T, crewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crew.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrewAggregateArgs>(args: Subset<T, CrewAggregateArgs>): Prisma.PrismaPromise<GetCrewAggregateType<T>>

    /**
     * Group by Crew.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends crewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: crewGroupByArgs['orderBy'] }
        : { orderBy?: crewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, crewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the crew model
   */
  readonly fields: crewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for crew.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__crewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the crew model
   */
  interface crewFieldRefs {
    readonly name: FieldRef<"crew", 'String'>
    readonly id: FieldRef<"crew", 'Int'>
    readonly relationship: FieldRef<"crew", 'String'>
    readonly description: FieldRef<"crew", 'String'>
    readonly image: FieldRef<"crew", 'String'>
  }
    

  // Custom InputTypes
  /**
   * crew findUnique
   */
  export type crewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * Filter, which crew to fetch.
     */
    where: crewWhereUniqueInput
  }

  /**
   * crew findUniqueOrThrow
   */
  export type crewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * Filter, which crew to fetch.
     */
    where: crewWhereUniqueInput
  }

  /**
   * crew findFirst
   */
  export type crewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * Filter, which crew to fetch.
     */
    where?: crewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crews to fetch.
     */
    orderBy?: crewOrderByWithRelationInput | crewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crews.
     */
    cursor?: crewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crews.
     */
    distinct?: CrewScalarFieldEnum | CrewScalarFieldEnum[]
  }

  /**
   * crew findFirstOrThrow
   */
  export type crewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * Filter, which crew to fetch.
     */
    where?: crewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crews to fetch.
     */
    orderBy?: crewOrderByWithRelationInput | crewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crews.
     */
    cursor?: crewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crews.
     */
    distinct?: CrewScalarFieldEnum | CrewScalarFieldEnum[]
  }

  /**
   * crew findMany
   */
  export type crewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * Filter, which crews to fetch.
     */
    where?: crewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crews to fetch.
     */
    orderBy?: crewOrderByWithRelationInput | crewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing crews.
     */
    cursor?: crewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crews.
     */
    skip?: number
    distinct?: CrewScalarFieldEnum | CrewScalarFieldEnum[]
  }

  /**
   * crew create
   */
  export type crewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * The data needed to create a crew.
     */
    data: XOR<crewCreateInput, crewUncheckedCreateInput>
  }

  /**
   * crew createMany
   */
  export type crewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many crews.
     */
    data: crewCreateManyInput | crewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crew createManyAndReturn
   */
  export type crewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * The data used to create many crews.
     */
    data: crewCreateManyInput | crewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crew update
   */
  export type crewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * The data needed to update a crew.
     */
    data: XOR<crewUpdateInput, crewUncheckedUpdateInput>
    /**
     * Choose, which crew to update.
     */
    where: crewWhereUniqueInput
  }

  /**
   * crew updateMany
   */
  export type crewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update crews.
     */
    data: XOR<crewUpdateManyMutationInput, crewUncheckedUpdateManyInput>
    /**
     * Filter which crews to update
     */
    where?: crewWhereInput
    /**
     * Limit how many crews to update.
     */
    limit?: number
  }

  /**
   * crew updateManyAndReturn
   */
  export type crewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * The data used to update crews.
     */
    data: XOR<crewUpdateManyMutationInput, crewUncheckedUpdateManyInput>
    /**
     * Filter which crews to update
     */
    where?: crewWhereInput
    /**
     * Limit how many crews to update.
     */
    limit?: number
  }

  /**
   * crew upsert
   */
  export type crewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * The filter to search for the crew to update in case it exists.
     */
    where: crewWhereUniqueInput
    /**
     * In case the crew found by the `where` argument doesn't exist, create a new crew with this data.
     */
    create: XOR<crewCreateInput, crewUncheckedCreateInput>
    /**
     * In case the crew was found with the provided `where` argument, update it with this data.
     */
    update: XOR<crewUpdateInput, crewUncheckedUpdateInput>
  }

  /**
   * crew delete
   */
  export type crewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
    /**
     * Filter which crew to delete.
     */
    where: crewWhereUniqueInput
  }

  /**
   * crew deleteMany
   */
  export type crewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crews to delete
     */
    where?: crewWhereInput
    /**
     * Limit how many crews to delete.
     */
    limit?: number
  }

  /**
   * crew without action
   */
  export type crewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crew
     */
    select?: crewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crew
     */
    omit?: crewOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    display_name: string | null
    favorite_animal: string | null
    neon_user_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    display_name: string | null
    favorite_animal: string | null
    neon_user_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    display_name: number
    favorite_animal: number
    neon_user_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    display_name?: true
    favorite_animal?: true
    neon_user_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    display_name?: true
    favorite_animal?: true
    neon_user_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    display_name?: true
    favorite_animal?: true
    neon_user_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    display_name: string
    favorite_animal: string
    neon_user_id: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    display_name?: boolean
    favorite_animal?: boolean
    neon_user_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    display_name?: boolean
    favorite_animal?: boolean
    neon_user_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    display_name?: boolean
    favorite_animal?: boolean
    neon_user_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    display_name?: boolean
    favorite_animal?: boolean
    neon_user_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "display_name" | "favorite_animal" | "neon_user_id", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      display_name: string
      favorite_animal: string
      neon_user_id: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly display_name: FieldRef<"users", 'String'>
    readonly favorite_animal: FieldRef<"users", 'String'>
    readonly neon_user_id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model bunny_facts
   */

  export type AggregateBunny_facts = {
    _count: Bunny_factsCountAggregateOutputType | null
    _avg: Bunny_factsAvgAggregateOutputType | null
    _sum: Bunny_factsSumAggregateOutputType | null
    _min: Bunny_factsMinAggregateOutputType | null
    _max: Bunny_factsMaxAggregateOutputType | null
  }

  export type Bunny_factsAvgAggregateOutputType = {
    id: number | null
  }

  export type Bunny_factsSumAggregateOutputType = {
    id: number | null
  }

  export type Bunny_factsMinAggregateOutputType = {
    id: number | null
    fact: string | null
  }

  export type Bunny_factsMaxAggregateOutputType = {
    id: number | null
    fact: string | null
  }

  export type Bunny_factsCountAggregateOutputType = {
    id: number
    fact: number
    _all: number
  }


  export type Bunny_factsAvgAggregateInputType = {
    id?: true
  }

  export type Bunny_factsSumAggregateInputType = {
    id?: true
  }

  export type Bunny_factsMinAggregateInputType = {
    id?: true
    fact?: true
  }

  export type Bunny_factsMaxAggregateInputType = {
    id?: true
    fact?: true
  }

  export type Bunny_factsCountAggregateInputType = {
    id?: true
    fact?: true
    _all?: true
  }

  export type Bunny_factsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bunny_facts to aggregate.
     */
    where?: bunny_factsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bunny_facts to fetch.
     */
    orderBy?: bunny_factsOrderByWithRelationInput | bunny_factsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bunny_factsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bunny_facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bunny_facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bunny_facts
    **/
    _count?: true | Bunny_factsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bunny_factsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bunny_factsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bunny_factsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bunny_factsMaxAggregateInputType
  }

  export type GetBunny_factsAggregateType<T extends Bunny_factsAggregateArgs> = {
        [P in keyof T & keyof AggregateBunny_facts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBunny_facts[P]>
      : GetScalarType<T[P], AggregateBunny_facts[P]>
  }




  export type bunny_factsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bunny_factsWhereInput
    orderBy?: bunny_factsOrderByWithAggregationInput | bunny_factsOrderByWithAggregationInput[]
    by: Bunny_factsScalarFieldEnum[] | Bunny_factsScalarFieldEnum
    having?: bunny_factsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bunny_factsCountAggregateInputType | true
    _avg?: Bunny_factsAvgAggregateInputType
    _sum?: Bunny_factsSumAggregateInputType
    _min?: Bunny_factsMinAggregateInputType
    _max?: Bunny_factsMaxAggregateInputType
  }

  export type Bunny_factsGroupByOutputType = {
    id: number
    fact: string
    _count: Bunny_factsCountAggregateOutputType | null
    _avg: Bunny_factsAvgAggregateOutputType | null
    _sum: Bunny_factsSumAggregateOutputType | null
    _min: Bunny_factsMinAggregateOutputType | null
    _max: Bunny_factsMaxAggregateOutputType | null
  }

  type GetBunny_factsGroupByPayload<T extends bunny_factsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bunny_factsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bunny_factsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bunny_factsGroupByOutputType[P]>
            : GetScalarType<T[P], Bunny_factsGroupByOutputType[P]>
        }
      >
    >


  export type bunny_factsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fact?: boolean
  }, ExtArgs["result"]["bunny_facts"]>

  export type bunny_factsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fact?: boolean
  }, ExtArgs["result"]["bunny_facts"]>

  export type bunny_factsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fact?: boolean
  }, ExtArgs["result"]["bunny_facts"]>

  export type bunny_factsSelectScalar = {
    id?: boolean
    fact?: boolean
  }

  export type bunny_factsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fact", ExtArgs["result"]["bunny_facts"]>

  export type $bunny_factsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bunny_facts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fact: string
    }, ExtArgs["result"]["bunny_facts"]>
    composites: {}
  }

  type bunny_factsGetPayload<S extends boolean | null | undefined | bunny_factsDefaultArgs> = $Result.GetResult<Prisma.$bunny_factsPayload, S>

  type bunny_factsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bunny_factsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bunny_factsCountAggregateInputType | true
    }

  export interface bunny_factsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bunny_facts'], meta: { name: 'bunny_facts' } }
    /**
     * Find zero or one Bunny_facts that matches the filter.
     * @param {bunny_factsFindUniqueArgs} args - Arguments to find a Bunny_facts
     * @example
     * // Get one Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bunny_factsFindUniqueArgs>(args: SelectSubset<T, bunny_factsFindUniqueArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bunny_facts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bunny_factsFindUniqueOrThrowArgs} args - Arguments to find a Bunny_facts
     * @example
     * // Get one Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bunny_factsFindUniqueOrThrowArgs>(args: SelectSubset<T, bunny_factsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bunny_facts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bunny_factsFindFirstArgs} args - Arguments to find a Bunny_facts
     * @example
     * // Get one Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bunny_factsFindFirstArgs>(args?: SelectSubset<T, bunny_factsFindFirstArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bunny_facts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bunny_factsFindFirstOrThrowArgs} args - Arguments to find a Bunny_facts
     * @example
     * // Get one Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bunny_factsFindFirstOrThrowArgs>(args?: SelectSubset<T, bunny_factsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bunny_facts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bunny_factsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.findMany()
     * 
     * // Get first 10 Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bunny_factsWithIdOnly = await prisma.bunny_facts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bunny_factsFindManyArgs>(args?: SelectSubset<T, bunny_factsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bunny_facts.
     * @param {bunny_factsCreateArgs} args - Arguments to create a Bunny_facts.
     * @example
     * // Create one Bunny_facts
     * const Bunny_facts = await prisma.bunny_facts.create({
     *   data: {
     *     // ... data to create a Bunny_facts
     *   }
     * })
     * 
     */
    create<T extends bunny_factsCreateArgs>(args: SelectSubset<T, bunny_factsCreateArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bunny_facts.
     * @param {bunny_factsCreateManyArgs} args - Arguments to create many Bunny_facts.
     * @example
     * // Create many Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bunny_factsCreateManyArgs>(args?: SelectSubset<T, bunny_factsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bunny_facts and returns the data saved in the database.
     * @param {bunny_factsCreateManyAndReturnArgs} args - Arguments to create many Bunny_facts.
     * @example
     * // Create many Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bunny_facts and only return the `id`
     * const bunny_factsWithIdOnly = await prisma.bunny_facts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bunny_factsCreateManyAndReturnArgs>(args?: SelectSubset<T, bunny_factsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bunny_facts.
     * @param {bunny_factsDeleteArgs} args - Arguments to delete one Bunny_facts.
     * @example
     * // Delete one Bunny_facts
     * const Bunny_facts = await prisma.bunny_facts.delete({
     *   where: {
     *     // ... filter to delete one Bunny_facts
     *   }
     * })
     * 
     */
    delete<T extends bunny_factsDeleteArgs>(args: SelectSubset<T, bunny_factsDeleteArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bunny_facts.
     * @param {bunny_factsUpdateArgs} args - Arguments to update one Bunny_facts.
     * @example
     * // Update one Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bunny_factsUpdateArgs>(args: SelectSubset<T, bunny_factsUpdateArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bunny_facts.
     * @param {bunny_factsDeleteManyArgs} args - Arguments to filter Bunny_facts to delete.
     * @example
     * // Delete a few Bunny_facts
     * const { count } = await prisma.bunny_facts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bunny_factsDeleteManyArgs>(args?: SelectSubset<T, bunny_factsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bunny_facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bunny_factsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bunny_factsUpdateManyArgs>(args: SelectSubset<T, bunny_factsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bunny_facts and returns the data updated in the database.
     * @param {bunny_factsUpdateManyAndReturnArgs} args - Arguments to update many Bunny_facts.
     * @example
     * // Update many Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bunny_facts and only return the `id`
     * const bunny_factsWithIdOnly = await prisma.bunny_facts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bunny_factsUpdateManyAndReturnArgs>(args: SelectSubset<T, bunny_factsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bunny_facts.
     * @param {bunny_factsUpsertArgs} args - Arguments to update or create a Bunny_facts.
     * @example
     * // Update or create a Bunny_facts
     * const bunny_facts = await prisma.bunny_facts.upsert({
     *   create: {
     *     // ... data to create a Bunny_facts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bunny_facts we want to update
     *   }
     * })
     */
    upsert<T extends bunny_factsUpsertArgs>(args: SelectSubset<T, bunny_factsUpsertArgs<ExtArgs>>): Prisma__bunny_factsClient<$Result.GetResult<Prisma.$bunny_factsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bunny_facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bunny_factsCountArgs} args - Arguments to filter Bunny_facts to count.
     * @example
     * // Count the number of Bunny_facts
     * const count = await prisma.bunny_facts.count({
     *   where: {
     *     // ... the filter for the Bunny_facts we want to count
     *   }
     * })
    **/
    count<T extends bunny_factsCountArgs>(
      args?: Subset<T, bunny_factsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bunny_factsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bunny_facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bunny_factsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bunny_factsAggregateArgs>(args: Subset<T, Bunny_factsAggregateArgs>): Prisma.PrismaPromise<GetBunny_factsAggregateType<T>>

    /**
     * Group by Bunny_facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bunny_factsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bunny_factsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bunny_factsGroupByArgs['orderBy'] }
        : { orderBy?: bunny_factsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bunny_factsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBunny_factsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bunny_facts model
   */
  readonly fields: bunny_factsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bunny_facts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bunny_factsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bunny_facts model
   */
  interface bunny_factsFieldRefs {
    readonly id: FieldRef<"bunny_facts", 'Int'>
    readonly fact: FieldRef<"bunny_facts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bunny_facts findUnique
   */
  export type bunny_factsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * Filter, which bunny_facts to fetch.
     */
    where: bunny_factsWhereUniqueInput
  }

  /**
   * bunny_facts findUniqueOrThrow
   */
  export type bunny_factsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * Filter, which bunny_facts to fetch.
     */
    where: bunny_factsWhereUniqueInput
  }

  /**
   * bunny_facts findFirst
   */
  export type bunny_factsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * Filter, which bunny_facts to fetch.
     */
    where?: bunny_factsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bunny_facts to fetch.
     */
    orderBy?: bunny_factsOrderByWithRelationInput | bunny_factsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bunny_facts.
     */
    cursor?: bunny_factsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bunny_facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bunny_facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bunny_facts.
     */
    distinct?: Bunny_factsScalarFieldEnum | Bunny_factsScalarFieldEnum[]
  }

  /**
   * bunny_facts findFirstOrThrow
   */
  export type bunny_factsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * Filter, which bunny_facts to fetch.
     */
    where?: bunny_factsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bunny_facts to fetch.
     */
    orderBy?: bunny_factsOrderByWithRelationInput | bunny_factsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bunny_facts.
     */
    cursor?: bunny_factsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bunny_facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bunny_facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bunny_facts.
     */
    distinct?: Bunny_factsScalarFieldEnum | Bunny_factsScalarFieldEnum[]
  }

  /**
   * bunny_facts findMany
   */
  export type bunny_factsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * Filter, which bunny_facts to fetch.
     */
    where?: bunny_factsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bunny_facts to fetch.
     */
    orderBy?: bunny_factsOrderByWithRelationInput | bunny_factsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bunny_facts.
     */
    cursor?: bunny_factsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bunny_facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bunny_facts.
     */
    skip?: number
    distinct?: Bunny_factsScalarFieldEnum | Bunny_factsScalarFieldEnum[]
  }

  /**
   * bunny_facts create
   */
  export type bunny_factsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * The data needed to create a bunny_facts.
     */
    data: XOR<bunny_factsCreateInput, bunny_factsUncheckedCreateInput>
  }

  /**
   * bunny_facts createMany
   */
  export type bunny_factsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bunny_facts.
     */
    data: bunny_factsCreateManyInput | bunny_factsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bunny_facts createManyAndReturn
   */
  export type bunny_factsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * The data used to create many bunny_facts.
     */
    data: bunny_factsCreateManyInput | bunny_factsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bunny_facts update
   */
  export type bunny_factsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * The data needed to update a bunny_facts.
     */
    data: XOR<bunny_factsUpdateInput, bunny_factsUncheckedUpdateInput>
    /**
     * Choose, which bunny_facts to update.
     */
    where: bunny_factsWhereUniqueInput
  }

  /**
   * bunny_facts updateMany
   */
  export type bunny_factsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bunny_facts.
     */
    data: XOR<bunny_factsUpdateManyMutationInput, bunny_factsUncheckedUpdateManyInput>
    /**
     * Filter which bunny_facts to update
     */
    where?: bunny_factsWhereInput
    /**
     * Limit how many bunny_facts to update.
     */
    limit?: number
  }

  /**
   * bunny_facts updateManyAndReturn
   */
  export type bunny_factsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * The data used to update bunny_facts.
     */
    data: XOR<bunny_factsUpdateManyMutationInput, bunny_factsUncheckedUpdateManyInput>
    /**
     * Filter which bunny_facts to update
     */
    where?: bunny_factsWhereInput
    /**
     * Limit how many bunny_facts to update.
     */
    limit?: number
  }

  /**
   * bunny_facts upsert
   */
  export type bunny_factsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * The filter to search for the bunny_facts to update in case it exists.
     */
    where: bunny_factsWhereUniqueInput
    /**
     * In case the bunny_facts found by the `where` argument doesn't exist, create a new bunny_facts with this data.
     */
    create: XOR<bunny_factsCreateInput, bunny_factsUncheckedCreateInput>
    /**
     * In case the bunny_facts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bunny_factsUpdateInput, bunny_factsUncheckedUpdateInput>
  }

  /**
   * bunny_facts delete
   */
  export type bunny_factsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
    /**
     * Filter which bunny_facts to delete.
     */
    where: bunny_factsWhereUniqueInput
  }

  /**
   * bunny_facts deleteMany
   */
  export type bunny_factsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bunny_facts to delete
     */
    where?: bunny_factsWhereInput
    /**
     * Limit how many bunny_facts to delete.
     */
    limit?: number
  }

  /**
   * bunny_facts without action
   */
  export type bunny_factsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bunny_facts
     */
    select?: bunny_factsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bunny_facts
     */
    omit?: bunny_factsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CrewScalarFieldEnum: {
    name: 'name',
    id: 'id',
    relationship: 'relationship',
    description: 'description',
    image: 'image'
  };

  export type CrewScalarFieldEnum = (typeof CrewScalarFieldEnum)[keyof typeof CrewScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    display_name: 'display_name',
    favorite_animal: 'favorite_animal',
    neon_user_id: 'neon_user_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Bunny_factsScalarFieldEnum: {
    id: 'id',
    fact: 'fact'
  };

  export type Bunny_factsScalarFieldEnum = (typeof Bunny_factsScalarFieldEnum)[keyof typeof Bunny_factsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type crewWhereInput = {
    AND?: crewWhereInput | crewWhereInput[]
    OR?: crewWhereInput[]
    NOT?: crewWhereInput | crewWhereInput[]
    name?: StringFilter<"crew"> | string
    id?: IntFilter<"crew"> | number
    relationship?: StringNullableFilter<"crew"> | string | null
    description?: StringNullableFilter<"crew"> | string | null
    image?: StringNullableFilter<"crew"> | string | null
  }

  export type crewOrderByWithRelationInput = {
    name?: SortOrder
    id?: SortOrder
    relationship?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type crewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: crewWhereInput | crewWhereInput[]
    OR?: crewWhereInput[]
    NOT?: crewWhereInput | crewWhereInput[]
    name?: StringFilter<"crew"> | string
    relationship?: StringNullableFilter<"crew"> | string | null
    description?: StringNullableFilter<"crew"> | string | null
    image?: StringNullableFilter<"crew"> | string | null
  }, "id">

  export type crewOrderByWithAggregationInput = {
    name?: SortOrder
    id?: SortOrder
    relationship?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: crewCountOrderByAggregateInput
    _avg?: crewAvgOrderByAggregateInput
    _max?: crewMaxOrderByAggregateInput
    _min?: crewMinOrderByAggregateInput
    _sum?: crewSumOrderByAggregateInput
  }

  export type crewScalarWhereWithAggregatesInput = {
    AND?: crewScalarWhereWithAggregatesInput | crewScalarWhereWithAggregatesInput[]
    OR?: crewScalarWhereWithAggregatesInput[]
    NOT?: crewScalarWhereWithAggregatesInput | crewScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"crew"> | string
    id?: IntWithAggregatesFilter<"crew"> | number
    relationship?: StringNullableWithAggregatesFilter<"crew"> | string | null
    description?: StringNullableWithAggregatesFilter<"crew"> | string | null
    image?: StringNullableWithAggregatesFilter<"crew"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    display_name?: StringFilter<"users"> | string
    favorite_animal?: StringFilter<"users"> | string
    neon_user_id?: UuidFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    display_name?: SortOrder
    favorite_animal?: SortOrder
    neon_user_id?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    neon_user_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    display_name?: StringFilter<"users"> | string
    favorite_animal?: StringFilter<"users"> | string
  }, "id" | "username" | "neon_user_id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    display_name?: SortOrder
    favorite_animal?: SortOrder
    neon_user_id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    display_name?: StringWithAggregatesFilter<"users"> | string
    favorite_animal?: StringWithAggregatesFilter<"users"> | string
    neon_user_id?: UuidWithAggregatesFilter<"users"> | string
  }

  export type bunny_factsWhereInput = {
    AND?: bunny_factsWhereInput | bunny_factsWhereInput[]
    OR?: bunny_factsWhereInput[]
    NOT?: bunny_factsWhereInput | bunny_factsWhereInput[]
    id?: IntFilter<"bunny_facts"> | number
    fact?: StringFilter<"bunny_facts"> | string
  }

  export type bunny_factsOrderByWithRelationInput = {
    id?: SortOrder
    fact?: SortOrder
  }

  export type bunny_factsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bunny_factsWhereInput | bunny_factsWhereInput[]
    OR?: bunny_factsWhereInput[]
    NOT?: bunny_factsWhereInput | bunny_factsWhereInput[]
    fact?: StringFilter<"bunny_facts"> | string
  }, "id">

  export type bunny_factsOrderByWithAggregationInput = {
    id?: SortOrder
    fact?: SortOrder
    _count?: bunny_factsCountOrderByAggregateInput
    _avg?: bunny_factsAvgOrderByAggregateInput
    _max?: bunny_factsMaxOrderByAggregateInput
    _min?: bunny_factsMinOrderByAggregateInput
    _sum?: bunny_factsSumOrderByAggregateInput
  }

  export type bunny_factsScalarWhereWithAggregatesInput = {
    AND?: bunny_factsScalarWhereWithAggregatesInput | bunny_factsScalarWhereWithAggregatesInput[]
    OR?: bunny_factsScalarWhereWithAggregatesInput[]
    NOT?: bunny_factsScalarWhereWithAggregatesInput | bunny_factsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bunny_facts"> | number
    fact?: StringWithAggregatesFilter<"bunny_facts"> | string
  }

  export type crewCreateInput = {
    name: string
    relationship?: string | null
    description?: string | null
    image?: string | null
  }

  export type crewUncheckedCreateInput = {
    name: string
    id?: number
    relationship?: string | null
    description?: string | null
    image?: string | null
  }

  export type crewUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type crewUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type crewCreateManyInput = {
    name: string
    id?: number
    relationship?: string | null
    description?: string | null
    image?: string | null
  }

  export type crewUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type crewUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    display_name: string
    favorite_animal: string
    neon_user_id: string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    display_name: string
    favorite_animal: string
    neon_user_id: string
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    favorite_animal?: StringFieldUpdateOperationsInput | string
    neon_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    favorite_animal?: StringFieldUpdateOperationsInput | string
    neon_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    display_name: string
    favorite_animal: string
    neon_user_id: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    favorite_animal?: StringFieldUpdateOperationsInput | string
    neon_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    favorite_animal?: StringFieldUpdateOperationsInput | string
    neon_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type bunny_factsCreateInput = {
    fact: string
  }

  export type bunny_factsUncheckedCreateInput = {
    id?: number
    fact: string
  }

  export type bunny_factsUpdateInput = {
    fact?: StringFieldUpdateOperationsInput | string
  }

  export type bunny_factsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fact?: StringFieldUpdateOperationsInput | string
  }

  export type bunny_factsCreateManyInput = {
    id?: number
    fact: string
  }

  export type bunny_factsUpdateManyMutationInput = {
    fact?: StringFieldUpdateOperationsInput | string
  }

  export type bunny_factsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fact?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type crewCountOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
    relationship?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type crewAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type crewMaxOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
    relationship?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type crewMinOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
    relationship?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type crewSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    display_name?: SortOrder
    favorite_animal?: SortOrder
    neon_user_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    display_name?: SortOrder
    favorite_animal?: SortOrder
    neon_user_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    display_name?: SortOrder
    favorite_animal?: SortOrder
    neon_user_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type bunny_factsCountOrderByAggregateInput = {
    id?: SortOrder
    fact?: SortOrder
  }

  export type bunny_factsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bunny_factsMaxOrderByAggregateInput = {
    id?: SortOrder
    fact?: SortOrder
  }

  export type bunny_factsMinOrderByAggregateInput = {
    id?: SortOrder
    fact?: SortOrder
  }

  export type bunny_factsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}