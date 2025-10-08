// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Env",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "Env",
            targets: ["EnvPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "EnvPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/EnvPlugin"),
        .testTarget(
            name: "EnvPluginTests",
            dependencies: ["EnvPlugin"],
            path: "ios/Tests/EnvPluginTests")
    ]
)
