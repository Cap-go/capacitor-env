import Foundation

@objc public class LiveUpdates: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
