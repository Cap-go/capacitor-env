// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoLiveUpdates",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapgoLiveUpdates",
            targets: ["LiveUpdatesPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "LiveUpdatesPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/LiveUpdatesPlugin"),
        .testTarget(
            name: "LiveUpdatesPluginTests",
            dependencies: ["LiveUpdatesPlugin"],
            path: "ios/Tests/LiveUpdatesPluginTests")
    ]
)
